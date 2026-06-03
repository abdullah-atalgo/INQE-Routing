import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

type Props = {
  children?: React.ReactNode;
};

const sidebarWidth = 240;

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  },
  sidebar: {
    width: sidebarWidth,
    minWidth: sidebarWidth,
    background: '#1f2937',
    color: '#fff',
    padding: '1rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  logo: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  link: {
    display: 'block',
    padding: '0.5rem 0.75rem',
    color: 'inherit',
    textDecoration: 'none',
    borderRadius: 6,
  },
  activeLink: {
    background: '#111827',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
  },
  contentWrap: {
    flex: 1,
    padding: '1rem',
    boxSizing: 'border-box',
    overflow: 'auto',
    background: '#f3f4f6',
  },
  topBar: {
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
};

const NavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      ...styles.link,
      ...(isActive ? styles.activeLink : {}),
      color: isActive ? '#fff' : '#d1d5db',
    })}
  >
    {label}
  </NavLink>
);

const AppContent: React.FC<Props> = ({ children }) => {
  return (
    <div style={styles.container}>
      <Sidebar />

      <main style={styles.contentWrap}>
        <div style={styles.topBar}>
          <div style={{ fontSize: 18, fontWeight: 600 }}>App</div>
        </div>

        {/* If children are provided (used directly in App.tsx), render them.
            Otherwise use Outlet for react-router nested routes. */}
        {children ?? <Outlet />}
      </main>
    </div>
  );
};

export default AppContent;
