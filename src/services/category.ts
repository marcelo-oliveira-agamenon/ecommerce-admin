import apiService from '../config/axiosConfig';
import { Category } from '../models/category';

class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    const categories = (await apiService.get('/v1/category')).data;

    return categories;
  }
}

export default new CategoryService();
