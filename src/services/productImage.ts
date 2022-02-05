import apiService from '../config/axiosConfig';
import { ProductImage } from '../models/productImage';

class ProductImageService {
  async insertProductImage(productId: string): Promise<ProductImage> {
    const productImage = (await apiService.get(`/v1/product-image/${productId}`)).data;

    return productImage;
  }

  async deleteProductImage(id: string): Promise<void> {
    const productImage = (await apiService.delete(`/v1/product-image/${id}`)).data;

    return productImage;
  }
}

export default new ProductImageService();
