import React from 'react';
import { Database, CalendarClock, LayoutDashboard, Goal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// utils and config are intentionally not used here

interface SidebarProps {
  activeView?: string;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

export default function Sidebar({ activeView}: SidebarProps) {
    const navigate = useNavigate();
  const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: Goal, label: 'QE Goals', id: 'applications' },
    { icon: Database, label: 'Data', id: 'data' },
    { icon: CalendarClock, label: 'Scheduler', id: 'scheduler' }
  ];

  // Static sidebar using CSS (no Tailwind)
  return (
    <aside className="sidebar">
      <style>{`
        .sidebar{position:fixed;left:0;top:0;height:100vh;width:100px;background:#0f4c81;color:#fff;border-right:1px solid rgba(0,0,0,0.08);z-index:50;padding-top:56px;}
        .menu{width:100%;display:block}
        .menu-item{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px 8px;border-bottom:1px solid rgba(255,255,255,0.06);background:transparent;color:inherit;cursor:pointer;position:relative}
        .menu-item:hover{background:#145b8a}
        .menu-item.active{background:#cfe9fb;color:#000}
        .menu-item .indicator{position:absolute;left:0;top:0;height:100%;width:4px;background:#0f4c81;display:none}
        .menu-item.active .indicator{display:block}
        .icon{width:20px;height:20px}
        .label{margin-top:8px;font-size:11px;letter-spacing:0.4px}
      `}</style>

      <nav className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {navigate(`/${item.id}`)}}
            className={`menu-item ${activeView === item.id ? 'active' : ''}`}
            role="button"
            aria-current={activeView === item.id ? 'page' : undefined}
          >
            <span className="indicator" />
            <item.icon className="icon" />
            <span className="label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
