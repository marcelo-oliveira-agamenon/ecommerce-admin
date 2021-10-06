import React, { useState } from 'react';
import { Loading } from '../../components';

import './style.scss';

interface IDashboardTile {
  title: string;
}

const DashboardTile = ({ title }: IDashboardTile) => (
  <div className="tile">
    <h1>{title}</h1>
  </div>
);

const Dashboard: React.FC = () => {
  const [loading, _] = useState<boolean>(false);

  return (
    <div id="dashboard">
      {loading ? (
        <Loading size="bg" />
      ) : (
        <div className="grid">
          {Array(4)
            .fill(null)
            .map(() => (
              <DashboardTile key="aa" title="Text title" />
            ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
