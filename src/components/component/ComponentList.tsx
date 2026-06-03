import React from 'react'

type Tool = {
  id: number
  name: string
  description: string
  icon: string
}

const tools: Tool[] = [
  { id: 1, name: 'Jira', description: 'Project & issue tracking', icon: '🧩' },
  { id: 2, name: 'Gmail', description: 'Email service', icon: '✉️' },
  { id: 3, name: 'Slack', description: 'Team communication', icon: '💬' },
  { id: 4, name: 'Confluence', description: 'Documentation & knowledge base', icon: '📚' },
  { id: 5, name: 'Figma', description: 'Design collaboration', icon: '🎨' },
]

const styles: { [k: string]: React.CSSProperties } = {
  container: { fontFamily: 'Segoe UI, Roboto, sans-serif', padding: 16 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 18, fontWeight: 600 },
  list: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 },
  card: { display: 'flex', gap: 12, alignItems: 'center', padding: 12, borderRadius: 8, border: '1px solid #e6e6e6', background: '#fff' },
  icon: { fontSize: 28 },
  info: { flex: 1 },
  name: { fontSize: 14, fontWeight: 600, marginBottom: 4 },
  desc: { fontSize: 12, color: '#555' },
  btn: { padding: '6px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', background: '#0b5cff', color: '#fff' },
}

const ComponentList: React.FC = () => {
  const openTool = (t: Tool) => {
    // dummy action for demonstration
    // eslint-disable-next-line no-alert
    alert(`${t.name} opened (dummy)`)
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>Available Tools</div>
      </div>

      <div style={styles.list}>
        {tools.map((t) => (
          <div key={t.id} style={styles.card}>
            <div style={styles.icon} aria-hidden>
              {t.icon}
            </div>
            <div style={styles.info}>
              <div style={styles.name}>{t.name}</div>
              <div style={styles.desc}>{t.description}</div>
            </div>
            <button style={styles.btn} onClick={() => openTool(t)}>
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentList
