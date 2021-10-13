import React, { useState } from 'react';
// import { BarChart } from 'recharts';
import { Loading } from '../../components';

import './style.scss';

const Dashboard: React.FC = () => {
  const [loading, _] = useState<boolean>(false);

  return (
    <div id="dashboard">
      {loading ? (
        <Loading size="bg" />
      ) : (
        <div className="grid">
          <div className="tile" style={{ animation: 'popUp 1.5s 0.1s forwards' }}>
            <h1>Pedidos por mês</h1>
          </div>

          <div className="tile" style={{ animation: 'popUp 1.5s 0.6s forwards' }}>
            <div className="grid-list">
              <h1>quantidade produtos</h1>

              <h1>9</h1>

              <h1>quantidade usuários</h1>

              <h1>9</h1>

              <h1>quantidade pedidos</h1>

              <h1>9</h1>

              <h1>quantidade pedidos pagos</h1>

              <h1>9</h1>
            </div>
          </div>

          <div className="tile" style={{ animation: 'popUp 1.5s 1.5s forwards' }}>
            <h1>Lucro mensal</h1>
          </div>

          <div className="tile" style={{ animation: 'popUp 1.5s 2s forwards' }}>
            <h1>categorias por produtos</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
