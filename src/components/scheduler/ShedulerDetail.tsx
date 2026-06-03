import React, { useState } from 'react';

type Task = {
	id: string;
	name: string;
	cron: string;
	nextRun: string;
	lastRun?: string;
	status: 'pending' | 'running' | 'failed' | 'completed';
	description?: string;
	createdBy?: string;
	createdAt?: string;
	enabled: boolean;
};

const dummyTasks: Task[] = [
	{
		id: 'task-001',
		name: 'Daily data sync',
		cron: '0 2 * * *',
		nextRun: '2026-06-04T02:00:00Z',
		lastRun: '2026-06-03T02:00:00Z',
		status: 'completed',
		description: 'Synchronize data from remote API to local DB',
		createdBy: 'system',
		createdAt: '2026-01-10T08:15:00Z',
		enabled: true,
	},
	{
		id: 'task-002',
		name: 'Generate reports',
		cron: '30 6 * * MON',
		nextRun: '2026-06-08T06:30:00Z',
		lastRun: '2026-05-31T06:30:00Z',
		status: 'pending',
		description: 'Weekly summary report generation and upload',
		createdBy: 'analyst',
		createdAt: '2026-02-20T12:00:00Z',
		enabled: true,
	},
	{
		id: 'task-003',
		name: 'Cleanup temp files',
		cron: '0 3 * * SUN',
		nextRun: '2026-06-07T03:00:00Z',
		lastRun: '2026-05-31T03:00:00Z',
		status: 'failed',
		description: 'Remove stale temporary files older than 7 days',
		createdBy: 'ops',
		createdAt: '2025-11-05T09:45:00Z',
		enabled: false,
	},
];

export default function ShedulerDetail(): JSX.Element {
	const [tasks] = useState<Task[]>(dummyTasks);
	const [selectedId, setSelectedId] = useState<string | null>(tasks[0]?.id ?? null);

	const selected = tasks.find((t) => t.id === selectedId) ?? null;

	return (
		<div style={{ display: 'flex', gap: 20, fontFamily: 'Segoe UI, Roboto, Arial' }}>
			<div style={{ width: 300, borderRight: '1px solid #eee', paddingRight: 16 }}>
				<h3 style={{ marginTop: 0 }}>Scheduled Tasks</h3>
				<ul style={{ listStyle: 'none', padding: 0 }}>
					{tasks.map((t) => (
						<li
							key={t.id}
							onClick={() => setSelectedId(t.id)}
							style={{
								padding: '8px 10px',
								marginBottom: 8,
								borderRadius: 6,
								cursor: 'pointer',
								background: t.id === selectedId ? '#eef' : '#fff',
								border: '1px solid #ddd',
							}}
							title={t.description}
						>
							<div style={{ fontWeight: 600 }}>{t.name}</div>
							<div style={{ fontSize: 12, color: '#666' }}>{t.cron} · {t.status}</div>
						</li>
					))}
				</ul>
			</div>

			<div style={{ flex: 1, paddingLeft: 16 }}>
				<h3 style={{ marginTop: 0 }}>Task Details</h3>
				{selected ? (
					<div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8, background: '#fff' }}>
						<div style={{ marginBottom: 8 }}>
							<strong>Name:</strong> {selected.name}
						</div>
						<div style={{ marginBottom: 8 }}>
							<strong>ID:</strong> {selected.id}
						</div>
						<div style={{ marginBottom: 8 }}>
							<strong>Cron:</strong> {selected.cron}
						</div>
						<div style={{ marginBottom: 8 }}>
							<strong>Next Run:</strong> {new Date(selected.nextRun).toLocaleString()}
						</div>
						<div style={{ marginBottom: 8 }}>
							<strong>Last Run:</strong> {selected.lastRun ? new Date(selected.lastRun).toLocaleString() : '—'}
						</div>
						<div style={{ marginBottom: 8 }}>
							<strong>Status:</strong> {selected.status}
						</div>
						<div style={{ marginBottom: 8 }}>
							<strong>Enabled:</strong> {selected.enabled ? 'Yes' : 'No'}
						</div>
						{selected.description && (
							<div style={{ marginTop: 12 }}>
								<strong>Description</strong>
								<div style={{ marginTop: 6 }}>{selected.description}</div>
							</div>
						)}
						<div style={{ marginTop: 12, fontSize: 12, color: '#666' }}>
							<div>Created by: {selected.createdBy ?? '—'}</div>
							<div>Created at: {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : '—'}</div>
						</div>
					</div>
				) : (
					<div>Select a task to view details.</div>
				)}
			</div>
		</div>
	);
}
