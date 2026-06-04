import React from 'react'
import { useParams } from 'react-router-dom'

export type Application = {
  id: string
  name: string
  projects: string[]
  owner: string
}

export const dummyApplications: Application[] = [
  { id: 'app-1', name: 'Inventory Manager', projects: ['inventory-web', 'inventory-api'], owner: 'Alice' },
  { id: 'app-2', name: 'Order Processor', projects: ['orders-service'], owner: 'Bob' },
  { id: 'app-3', name: 'Analytics Dashboard', projects: ['analytics-ui', 'analytics-worker'], owner: 'Carol' },
]

interface ApplicationProps {
  id?: string
}

const Application: React.FC<ApplicationProps> = ({ id }) => {
  // determine effective id: prop -> query param (app-id or appId)
    // determine effective id: prop -> route param (:applicationId)
    const params = useParams<{ applicationId?: string }>()
    const appIdFromUrl = params.applicationId
    const effectiveId = id ?? appIdFromUrl
  const matched = effectiveId ? dummyApplications.find(a => a.id === effectiveId) : null

  if (effectiveId && matched) {
    return (
      <div className="application">
        <h2>{matched.name}</h2>
        <p>App ID: {matched.id}</p>
        <p>Owner: {matched.owner}</p>
        <h3>Projects under Test Cases</h3>
        {matched.projects && matched.projects.length > 0 ? (
          <ul>
            {matched.projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        ) : (
          <p>No projects available</p>
        )}
      </div>
    )
  }

  if (effectiveId && !matched) {
    return (
      <div className="application">
        <h2>Application not found</h2>
        <p>No application matches id: {effectiveId}</p>
      </div>
    )
  }

  return (
    <div className="application-list">
      <h2>Applications</h2>
      {dummyApplications.map(app => (
        <div key={app.id} className="application">
          <h3>{app.name}</h3>
          <p>App ID: {app.id}</p>
          <p>Owner: {app.owner}</p>
          <h4>Projects</h4>
          <ul>
            {app.projects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Application
