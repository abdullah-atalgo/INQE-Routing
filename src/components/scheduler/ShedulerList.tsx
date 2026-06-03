import React, { useState } from 'react';

interface Task {
	id: number;
	title: string;
	time: string;
	enabled: boolean;
}

const initialTasks: Task[] = [
	{ id: 1, title: 'Backup DB', time: '02:00 AM', enabled: true },
	{ id: 2, title: 'Generate Reports', time: '06:30 AM', enabled: false },
	{ id: 3, title: 'Send Emails', time: '09:00 AM', enabled: true },
];

const ShedulerList: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);

	const toggle = (id: number) => {
		setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t)));
	};

	return (
		<div style={{ padding: 16, fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
			<h3>Scheduled Tasks</h3>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{tasks.map((t) => (
					<li
						key={t.id}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '8px 12px',
							border: '1px solid #eee',
							borderRadius: 6,
							marginBottom: 8,
							background: t.enabled ? '#f7fff6' : '#fff7f7',
						}}
					>
						<div>
							<div style={{ fontWeight: 600 }}>{t.title}</div>
							<div style={{ fontSize: 12, color: '#666' }}>{t.time}</div>
						</div>
						<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
							<button
								onClick={() => toggle(t.id)}
								style={{ padding: '6px 10px', borderRadius: 4, border: '1px solid #ccc', background: t.enabled ? '#dff6e0' : '#fff' }}
							>
								{t.enabled ? 'Enabled' : 'Disabled'}
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShedulerList;

