import React, { useState, type FormEvent } from 'react';

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterPage(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'general', string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Invalid email.';
    if (!form.password) next.password = 'Password is required.';
    else if (form.password.length < 6) next.password = 'Password must be at least 6 characters.';
    if (form.password !== form.confirmPassword) next.confirmPassword = 'Passwords do not match.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        setErrors({ general: payload?.message || 'Registration failed.' });
      } else {
        setSuccess('Registration successful.');
        setForm(initialState);
      }
    } catch (err) {
      setErrors({ general: 'Network error.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '2rem auto', padding: 16, border: '1px solid #eee', borderRadius: 6 }}>
      <h2>Register</h2>
      {errors.general && <div style={{ color: 'crimson', marginBottom: 8 }}>{errors.general}</div>}
      {success && <div style={{ color: 'green', marginBottom: 8 }}>{success}</div>}
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 8 }}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} style={{ display: 'block', width: '100%' }} />
          </label>
          {errors.name && <small style={{ color: 'crimson' }}>{errors.name}</small>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} type="email" style={{ display: 'block', width: '100%' }} />
          </label>
          {errors.email && <small style={{ color: 'crimson' }}>{errors.email}</small>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Password
            <input name="password" value={form.password} onChange={handleChange} type="password" style={{ display: 'block', width: '100%' }} />
          </label>
          {errors.password && <small style={{ color: 'crimson' }}>{errors.password}</small>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            Confirm Password
            <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" style={{ display: 'block', width: '100%' }} />
          </label>
          {errors.confirmPassword && <small style={{ color: 'crimson' }}>{errors.confirmPassword}</small>}
        </div>

        <button type="submit" disabled={loading} style={{ padding: '8px 12px' }}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}
