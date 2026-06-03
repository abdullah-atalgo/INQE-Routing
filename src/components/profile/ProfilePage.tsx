
import React from 'react';

type User = {
	name: string;
	email: string;
	role?: string;
	bio?: string;
	avatarUrl?: string;
};

const ProfilePage: React.FC = () => {
	const user: User = {
		name: 'Md Motassim',
		email: 'motassim@example.com',
		role: 'Developer',
		bio: 'Passionate about building web applications and learning new technologies.',
		avatarUrl: 'https://via.placeholder.com/120',
	};

	return (
		<div
			style={{
				maxWidth: 420,
				margin: '40px auto',
				fontFamily: 'Arial, Helvetica, sans-serif',
				border: '1px solid #eee',
				padding: 20,
				borderRadius: 8,
				boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
				<img
					src={user.avatarUrl}
					alt="avatar"
					style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover' }}
				/>
				<div>
					<h2 style={{ margin: 0 }}>{user.name}</h2>
					<p style={{ margin: '6px 0', color: '#666' }}>{user.role}</p>
					<a href={`mailto:${user.email}`} style={{ color: '#0366d6', textDecoration: 'none' }}>
						{user.email}
					</a>
				</div>
			</div>

			<p style={{ marginTop: 16, color: '#333' }}>{user.bio}</p>
		</div>
	);
};

export default ProfilePage;
