import apiService from '../config/axiosConfig';
import {
  Product,
  GetAllProductsFilters,
  GetAllProductsResponse,
  CreateOrUpdateProduct,
} from '../models/product';

class ProductService {
  async getAllProducts(params?: GetAllProductsFilters): Promise<GetAllProductsResponse> {
    const allProducts = (
      await apiService.get('/v1/product', {
        params,
      })
    ).data;

    return allProducts;
  }

  async insertNewProduct(product: CreateOrUpdateProduct): Promise<boolean> {
    const createdProduct = (await apiService.post('/v1/product', product)).data;

    return !!createdProduct;
  }

  async editProductById(productId: string, product: Product): Promise<Product> {
    const editedProduct = (await apiService.put(`/v1/product/${productId}`, product)).data;

    return editedProduct;
  }

  async deleteProduct(productId: string): Promise<boolean> {
    const deleteProduct = (await apiService.delete(`/v1/product/${productId}`)).data;

    return !!deleteProduct;
  }
}

export default new ProductService();
