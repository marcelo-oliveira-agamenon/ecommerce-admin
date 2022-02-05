import React from 'react';
import { Product } from '../models/product';

interface IProductContext {
  products: Array<Product>;
}

const initialState = {
  products: [],
};

const ProductContext = React.createContext<IProductContext>(initialState);

export default ProductContext;
