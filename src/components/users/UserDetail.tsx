import React from "react";

type User = {
	id: string;
	name: string;
	email: string;
	phone?: string;
	role?: string;
	address?: string;
	joined?: string;
	bio?: string;
};

const dummyUser: User = {
	id: "u_001",
	name: "Jane Doe",
	email: "jane.doe@example.com",
	phone: "+1 (555) 123-4567",
	role: "Product Manager",
	address: "123 Main St, Springfield, USA",
	joined: "2021-06-15",
	bio: "Enthusiastic product leader focused on building delightful user experiences.",
};

const containerStyle: React.CSSProperties = {
	maxWidth: 520,
	margin: "20px auto",
	padding: 20,
	borderRadius: 8,
	boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
	fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
	background: "#fff",
};

const avatarStyle: React.CSSProperties = {
	width: 88,
	height: 88,
	borderRadius: "50%",
	background: "linear-gradient(135deg,#6EE7B7,#3B82F6)",
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: 32,
	fontWeight: 600,
};

export default function UserDetail(): JSX.Element {
	const u = dummyUser;

	const initials = u.name
		.split(" ")
		.map((s) => s[0])
		.slice(0, 2)
		.join("");

	return (
		<div style={containerStyle}>
			<div style={{ display: "flex", gap: 16, alignItems: "center" }}>
				<div style={avatarStyle} aria-hidden>
					{initials}
				</div>
				<div>
					<h2 style={{ margin: 0 }}>{u.name}</h2>
					<p style={{ margin: "6px 0", color: "#555" }}>{u.role}</p>
					<p style={{ margin: 0, color: "#777", fontSize: 14 }}>{u.email}</p>
				</div>
			</div>

			<hr style={{ margin: "18px 0", border: "none", borderTop: "1px solid #eee" }} />

			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
				<div>
					<strong>Phone</strong>
					<div style={{ color: "#444" }}>{u.phone}</div>
				</div>
				<div>
					<strong>Joined</strong>
					<div style={{ color: "#444" }}>{u.joined}</div>
				</div>
				<div style={{ gridColumn: "1 / -1" }}>
					<strong>Address</strong>
					<div style={{ color: "#444" }}>{u.address}</div>
				</div>
				<div style={{ gridColumn: "1 / -1" }}>
					<strong>About</strong>
					<div style={{ color: "#444" }}>{u.bio}</div>
				</div>
			</div>
		</div>
	);
}
