import React, { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  invited: boolean;
};

const initialUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', invited: true },
  { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', invited: false },
  { id: 3, name: 'Carla Gomez', email: 'carla.gomez@example.com', invited: true },
  { id: 4, name: 'Daniel Lee', email: 'daniel.lee@example.com', invited: false },
  { id: 5, name: 'Eve Turner', email: 'eve.turner@example.com', invited: false },
];

export default function UserInviteList(): JSX.Element {
  const [users, setUsers] = useState<User[]>(initialUsers);

  function toggleInvite(id: number) {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, invited: !u.invited } : u)));
  }

  function removeUser(id: number) {
    setUsers(prev => prev.filter(u => u.id !== id));
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial', maxWidth: 800, margin: '16px auto' }}>
      <h3 style={{ margin: '8px 0' }}>User Invites</h3>
      <p style={{ marginTop: 0, color: '#555' }}>{users.length} users</p>
      <div style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f8f8f8' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '10px 12px' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '10px 12px' }}>Email</th>
              <th style={{ textAlign: 'center', padding: '10px 12px' }}>Status</th>
              <th style={{ textAlign: 'right', padding: '10px 12px' }}></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                <td style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      background: '#ddd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                    }}
                  >
                    {user.name
                      .split(' ')
                      .map(s => s[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{user.name}</div>
                    <div style={{ fontSize: 12, color: '#666' }}>ID: {user.id}</div>
                  </div>
                </td>
                <td style={{ padding: '10px 12px' }}>{user.email}</td>
                <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: 12,
                      background: user.invited ? '#e6ffed' : '#fff6e6',
                      color: user.invited ? '#117a3a' : '#7a5200',
                      fontSize: 12,
                    }}
                  >
                    {user.invited ? 'Invited' : 'Not invited'}
                  </span>
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'right' }}>
                  <button
                    onClick={() => toggleInvite(user.id)}
                    style={{ marginRight: 8, padding: '6px 10px' }}
                  >
                    {user.invited ? 'Revoke' : 'Invite'}
                  </button>
                  <button onClick={() => removeUser(user.id)} style={{ padding: '6px 10px' }}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: 24, textAlign: 'center', color: '#777' }}>
                  No users
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
