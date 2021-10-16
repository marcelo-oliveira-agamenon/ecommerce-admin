import apiService from '../config/axiosConfig';
import {
  DashboardCard1,
  DashboardCard2,
  DashboardCard3,
  DashboardCard4,
} from '../models/dashboard';

class DashboardService {
  async getOrdersByMonth(): Promise<DashboardCard1[]> {
    const ordersByMonth = (await apiService.get('/v1/admin/card1')).data;

    return ordersByMonth;
  }

  async getProfitByMonth(): Promise<DashboardCard2[]> {
    const profitByMonth = (await apiService.get('/v1/admin/card2')).data;

    return profitByMonth;
  }

  async getInfoQuantity(): Promise<DashboardCard3> {
    const infoQuantity = (await apiService.get('/v1/admin/card3')).data;

    return infoQuantity;
  }

  async getCategories(): Promise<DashboardCard4> {
    const categories = (await apiService.get('/v1/admin/card4')).data;

    return categories;
  }
}

export default new DashboardService();
