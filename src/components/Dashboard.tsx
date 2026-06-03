import React from 'react';

type Metric = {
  id: string;
  title: string;
  value: string | number;
  change?: string;
  color?: string;
};

type RouteItem = {
  id: string;
  from: string;
  to: string;
  status: string;
  eta: string;
};

const metrics: Metric[] = [
  { id: 'm1', title: 'Active Routes', value: 24, change: '+4%', color: '#4caf50' },
  { id: 'm2', title: 'Pending Requests', value: 7, change: '-1%', color: '#ff9800' },
  { id: 'm3', title: 'Avg. Latency (ms)', value: 128, change: '+12%', color: '#f44336' },
  { id: 'm4', title: 'Users Online', value: 56, change: '+8%', color: '#2196f3' },
];

const routes: RouteItem[] = [
  { id: 'r1', from: 'Node A', to: 'Node B', status: 'Active', eta: '12:32' },
  { id: 'r2', from: 'Node C', to: 'Node D', status: 'Pending', eta: '—' },
  { id: 'r3', from: 'Node E', to: 'Node F', status: 'Active', eta: '03:14' },
  { id: 'r4', from: 'Node G', to: 'Node H', status: 'Failed', eta: '—' },
];

const recentActivities = [
  'Route r1 updated by system',
  'New request created from Node X',
  'Latency spike detected on Node E',
  'User John connected from EU-1',
];

const cardStyle: React.CSSProperties = {
  padding: 16,
  borderRadius: 8,
  background: '#fff',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  minWidth: 160,
};

const containerStyle: React.CSSProperties = {
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  padding: 24,
  background: '#f5f7fb',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

export default function Dashboard(): JSX.Element {
  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>Dashboard</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>Overview of routing system (dummy data)</p>
      </header>

      <section style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        {metrics.map((m) => (
          <div key={m.id} style={{ ...cardStyle, flex: '1 1 160px' }}>
            <div style={{ fontSize: 12, color: '#777' }}>{m.title}</div>
            <div style={{ marginTop: 8, fontSize: 20, fontWeight: 600 }}>{m.value}</div>
            {m.change && (
              <div style={{ marginTop: 6, fontSize: 12, color: m.color || '#333' }}>{m.change}</div>
            )}
          </div>
        ))}
      </section>

      <section style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 2, minWidth: 320 }}>
          <div style={{ ...cardStyle }}>
            <h2 style={{ margin: '0 0 12px', fontSize: 16 }}>Active Routes</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#555' }}>
                  <th style={{ padding: '8px 6px' }}>ID</th>
                  <th style={{ padding: '8px 6px' }}>From</th>
                  <th style={{ padding: '8px 6px' }}>To</th>
                  <th style={{ padding: '8px 6px' }}>Status</th>
                  <th style={{ padding: '8px 6px' }}>ETA</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r) => (
                  <tr key={r.id} style={{ borderTop: '1px solid #eee' }}>
                    <td style={{ padding: '10px 6px' }}>{r.id}</td>
                    <td style={{ padding: '10px 6px' }}>{r.from}</td>
                    <td style={{ padding: '10px 6px' }}>{r.to}</td>
                    <td style={{ padding: '10px 6px' }}>{r.status}</td>
                    <td style={{ padding: '10px 6px' }}>{r.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside style={{ flex: 1, minWidth: 220 }}>
          <div style={{ ...cardStyle, marginBottom: 12 }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 14 }}>Recent Activity</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#444' }}>
              {recentActivities.map((a, i) => (
                <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>{a}</li>
              ))}
            </ul>
          </div>

          <div style={{ ...cardStyle }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 14 }}>Simple Traffic</h3>
            <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
              <TrafficBar label="Node A" percent={75} color="#4caf50" />
              <TrafficBar label="Node E" percent={40} color="#2196f3" />
              <TrafficBar label="Node C" percent={20} color="#ff9800" />
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

function TrafficBar({ label, percent, color }: { label: string; percent: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: '0 0 80px', fontSize: 13, color: '#444' }}>{label}</div>
      <div style={{ flex: 1, height: 10, background: '#eee', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: `${percent}%`, height: '100%', background: color }} />
      </div>
      <div style={{ width: 36, textAlign: 'right', fontSize: 12, color: '#666' }}>{percent}%</div>
    </div>
  );
}
