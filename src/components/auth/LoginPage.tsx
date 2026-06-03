import React, { useState } from 'react';

type LoginProps = {
  onLogin?: (email: string, password: string) => Promise<void> | void;
  className?: string;
};

const containerStyle: React.CSSProperties = {
  maxWidth: 400,
  margin: '40px auto',
  padding: 24,
  border: '1px solid #e6e6e6',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  margin: '8px 0 16px',
  boxSizing: 'border-box',
  borderRadius: 4,
  border: '1px solid #ccc',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 4,
  border: 'none',
  backgroundColor: '#0078D4',
  color: '#fff',
  cursor: 'pointer',
};

export default function LoginPage({ onLogin, className }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!email) return 'Email is required';
    // simple email regex
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) return 'Enter a valid email';
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setLoading(true);
    try {
      if (onLogin) {
        await onLogin(email, password);
      } else {
        // default mocked behavior
        await new Promise((res) => setTimeout(res, 800));
        console.log('Logged in', { email, password });
      }
    } catch (err: any) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={className} style={containerStyle}>
      <h2 style={{ marginTop: 0 }}>Sign in</h2>
      <form onSubmit={handleSubmit} aria-label="login-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          placeholder="you@example.com"
          autoComplete="username"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="••••••••"
          autoComplete="current-password"
        />

        {error && (
          <div role="alert" style={{ color: 'crimson', marginBottom: 12 }}>
            {error}
          </div>
        )}

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
