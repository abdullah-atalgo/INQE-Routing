import React from 'react';

export type Application = {
  id?: string;
  name: string;
  projects?: string[];
  owner?: string;
};

type Props = {
  applications?: Application[];
  className?: string;
};

const ApplicationList: React.FC<Props> = ({ applications = [], className }) => {
  if (!applications || applications.length === 0) {
    return <div className={className}>No applications</div>;
  }

  return (
    <ul className={className}>
      {applications.map((app) => (
        // Only show the application name in the list
        <li key={app.id ?? app.name}>{app.name}</li>
      ))}
    </ul>
  );
};

export default ApplicationList;
