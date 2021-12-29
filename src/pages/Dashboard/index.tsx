import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line
import { BarChart, PieChart, Pie, XAxis, YAxis } from 'recharts';
import { Loading } from '../../components';
import DashboardService from '../../services/dashboard';
import {
  DashboardCard1,
  DashboardCard2,
  DashboardCard3,
  DashboardCard4,
} from '../../models/dashboard';

import './style.scss';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [infoCard1, setInfoCard1] = useState<DashboardCard1[]>();
  const [infoCard2, setInfoCard2] = useState<DashboardCard2[]>();
  const [infoCard3, setInfoCard3] = useState<DashboardCard3>();
  const [infoCard4, setInfoCard4] = useState<DashboardCard4>();

  const getDashboardInformations = useCallback(async () => {
    setLoading(true);

    Promise.all([
      DashboardService.getOrdersByMonth(),
      DashboardService.getProfitByMonth(),
      DashboardService.getInfoQuantity(),
      DashboardService.getCategories(),
    ])
      .then((response) => {
        setInfoCard1(response[0].reverse());
        setInfoCard2(response[1].reverse());
        setInfoCard3(response[2]);
        setInfoCard4(response[3]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getDashboardInformations();
  }, []);

  return (
    <div id="dashboard">
      {loading ? (
        <Loading size="bg" />
      ) : (
        <div className="grid">
          <div className="tile" style={{ animation: 'popUp 1.5s 0.1s forwards' }}>
            <h1>Pedidos por mês</h1>

            <BarChart width={600} height={250} data={infoCard1}>
              <XAxis dataKey="Month" />
              <YAxis dataKey="Quantity" />
            </BarChart>
          </div>

          <div className="tile" style={{ animation: 'popUp 1.5s 0.6s forwards' }}>
            <div className="grid-list">
              <h1>quantidade produtos</h1>

              <h1>{infoCard3?.countAllProducts}</h1>

              <h1>quantidade usuários</h1>

              <h1>{infoCard3?.countAllUsers}</h1>

              <h1>quantidade pedidos</h1>

              <h1>{infoCard3?.countAllOrders}</h1>

              <h1>quantidade pedidos pagos</h1>

              <h1>{infoCard3?.countAllPaidOrders}</h1>
            </div>
          </div>

          <div className="tile" style={{ animation: 'popUp 1.5s 1.5s forwards' }}>
            <h1>Lucro mensal</h1>

            <BarChart width={600} height={250} data={infoCard2}>
              <XAxis dataKey="Month" />
              <YAxis dataKey="Quantity" />
            </BarChart>
          </div>

          <div className="tile" style={{ animation: 'popUp 1.5s 2s forwards' }}>
            <h1>categorias por produtos</h1>

            <PieChart width={300} height={300} className="circle-graph">
              <Pie
                data={infoCard4?.data}
                dataKey="Count"
                nameKey="Name"
                outerRadius={135}
                cx="50%"
                cy="50%"
                fill="green"
                label
              />
            </PieChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
