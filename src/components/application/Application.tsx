import React from 'react'

interface ApplicationProps {
    appId:number
  appName: string
  projects: string[]
  owner: string
}

export const dummyApplicationData: ApplicationProps = {
  appId: 1,
  appName: 'Dummy Application',
  projects: ['Project Alpha', 'Project Beta', 'Project Gamma'],
  owner: 'Jane Doe',
}

const Application: React.FC<ApplicationProps> = ({ appId,appName, projects, owner }) => {
  return (
    <div className="application">
      <h2>{appName}</h2>
      <p>App ID: {appId}</p>
      <p>Owner: {owner}</p>
      <h3>Projects under Test Cases</h3>
      {projects && projects.length > 0 ? (
        <ul>
          {projects.map((project, idx) => (
            <li key={idx}>{project}</li>
          ))}
        </ul>
      ) : (
        <p>No projects available</p>
      )}
    </div>
  )
}

export default Application
