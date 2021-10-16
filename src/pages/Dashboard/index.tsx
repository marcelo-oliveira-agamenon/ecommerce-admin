import React, { useState, useEffect, useCallback } from 'react';
import { BarChart, XAxis, YAxis } from 'recharts';
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

  const getDashboardInformationCard1 = useCallback(async () => {
    await DashboardService.getOrdersByMonth()
      .then((response) => {
        setInfoCard1(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getDashboardInformationCard2 = useCallback(async () => {
    await DashboardService.getProfitByMonth()
      .then((response) => {
        setInfoCard2(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getDashboardInformationCard3 = useCallback(async () => {
    await DashboardService.getInfoQuantity()
      .then((response) => {
        setInfoCard3(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getDashboardInformationCard4 = useCallback(async () => {
    await DashboardService.getCategories()
      .then((response) => {
        setInfoCard4(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getDashboardInformationCard1();
    getDashboardInformationCard2();
    getDashboardInformationCard3();
    getDashboardInformationCard4();
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
          {console.log(infoCard3, infoCard4)}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
