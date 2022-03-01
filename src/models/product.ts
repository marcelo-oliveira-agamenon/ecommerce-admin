export interface Product {
  ID: string;
  Name: string;
  Categoryid: number;
  Value: number;
  StockQtd: number;
  Description: string;
  TypeUnit: string;
  TecnicalDetails: string;
  HasPromotion: boolean;
  Discount: number;
  HasShipping: boolean;
  ShippingPrice: number;
  Rate: number;
  CreatedAt: string;
  UpdatedAt: string;
  Category: {
    ID: number;
    Name: string;
    ImageKey: string;
    ImageURL: string;
    CreatedAt: string;
    UpdatedAt: string;
  };
  ProductImage: Array<string>;
}

export interface GetAllProductsResponse {
  count: number;
  products: Product[];
}

export interface GetAllProductsFilters {
  limit?: number;
  offset?: number;
  category?: string;
  promotion?: boolean;
  recent?: boolean;
  name?: string;
}

export interface CreateOrUpdateProduct {
  Name: string;
  Categoryid: number;
  Value: number;
  StockQtd: number;
  Description: string;
  TypeUnit: string;
  TecnicalDetails: string;
  HasPromotion: boolean;
  Discount: number;
  HasShipping: boolean;
  ShippingPrice: number;
  Rate: number;
  ProductImage: Array<File>;
}
