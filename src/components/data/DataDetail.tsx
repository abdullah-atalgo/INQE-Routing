import React from 'react';

type TestData = {
	id: number;
	name: string;
	description: string;
	createdAt: string;
	status: 'active' | 'inactive' | 'pending';
};

const DUMMY_DATA: TestData[] = [
	{
		id: 1,
		name: 'Sample Item A',
		description: 'This is a short description for Sample Item A.',
		createdAt: '2026-01-15',
		status: 'active',
	},
	{
		id: 2,
		name: 'Sample Item B',
		description: 'This is a short description for Sample Item B.',
		createdAt: '2026-02-03',
		status: 'pending',
	},
	{
		id: 3,
		name: 'Sample Item C',
		description: 'This is a short description for Sample Item C.',
		createdAt: '2026-03-22',
		status: 'inactive',
	},
];

const statusColor = (s: TestData['status']) => {
	switch (s) {
		case 'active':
			return '#d1fae5';
		case 'pending':
			return '#fef3c7';
		case 'inactive':
			return '#fee2e2';
		default:
			return '#fff';
	}
};

export default function DataDetail(): JSX.Element {
	return (
		<div style={{ fontFamily: 'Segoe UI, Roboto, Arial', padding: 16 }}>
			<h3 style={{ margin: '0 0 12px 0' }}>Dummy Test Data Details</h3>
			<div style={{ display: 'grid', gap: 12 }}>
				{DUMMY_DATA.map((item) => (
					<div
						key={item.id}
						style={{
							border: '1px solid #e5e7eb',
							borderRadius: 6,
							padding: 12,
							background: statusColor(item.status),
						}}
					>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<strong>{item.name}</strong>
							<small style={{ color: '#6b7280' }}>{item.createdAt}</small>
						</div>
						<p style={{ margin: '8px 0', color: '#374151' }}>{item.description}</p>
						<div style={{ fontSize: 12, color: '#111827' }}>
							Status: <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{item.status}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

