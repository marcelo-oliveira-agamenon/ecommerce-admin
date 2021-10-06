import apiService from '../config/axiosConfig';

class DashboardService {
  async getOrdersByMonth(): Promise<void> {
    const ordersByMonth = (await apiService.get('/v1/admin/card1')).data;

    return ordersByMonth;
  }
}

export default new DashboardService();
