import React from 'react';
import { useNavigate } from 'react-router-dom';

export type Application = {
  id?: string;
  name: string;
  projects?: string[];
  owner?: string;
};

type Props = {
  applications?: Application[];
  className?: string;
  onSelect?: (app: Application) => void;
};

// Dummy applications data for local/testing use
const dummyApplications: Application[] = [
  { id: 'app-1', name: 'Inventory Manager', projects: ['inventory-web', 'inventory-api'], owner: 'Alice' },
  { id: 'app-2', name: 'Order Processor', projects: ['orders-service'], owner: 'Bob' },
  { id: 'app-3', name: 'Analytics Dashboard', projects: ['analytics-ui', 'analytics-worker'], owner: 'Carol' },
];

const ApplicationList: React.FC<Props> = ({ applications = dummyApplications, className, onSelect }) => {
  const navigate = useNavigate();
  if (!applications || applications.length === 0) {
    return <div className={className}>No applications</div>;
  }

  const listStyle: React.CSSProperties = { listStyle: 'none', padding: 0, margin: 0 };
  const liStyle: React.CSSProperties = { borderBottom: '1px solid #e6e6e6' };
  const rowStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 180px', gap: 12, alignItems: 'center' };
  const buttonStyle: React.CSSProperties = { all: 'unset', display: 'block', width: '100%', padding: '10px 12px', cursor: 'pointer' };

  return (
    <ul className={className} style={listStyle}>
      {/* header row */}
      <li style={{ ...liStyle, background: '#f7f7f7', fontWeight: 600, padding: '8px 12px' }}>
        <div style={rowStyle}>
          <span>Name</span>
          <span>Owner</span>
        </div>
      </li>

      {applications.map((app) => (
        <li key={app.id ?? app.name} style={liStyle}>
          <button
            type="button"
            style={buttonStyle}
            onClick={() => {
              onSelect?.(app);
              navigate(`/applications/${encodeURIComponent(app.id ?? app.name)}`);
            }}
            aria-label={`Open ${app.name}`}
          >
            <div style={rowStyle}>
              <span>{app.name}</span>
              <span>{app.owner ?? '-'}</span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationList;
