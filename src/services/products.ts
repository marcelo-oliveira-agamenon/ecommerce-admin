import apiService from '../config/axiosConfig';
import { Product } from '../models/product';

class ProductService {
  async getAllProducts(): Promise<Product[]> {
    const allProducts = (await apiService.get('/v1/product')).data;

    return allProducts;
  }
}

export default new ProductService();
