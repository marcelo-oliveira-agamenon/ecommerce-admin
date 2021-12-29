import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductService from '../../services/products';
import { DefaultButton, DefaultSearchBar, DefaultTable } from '../../components';
import { Product } from '../../models/product';

import './style.scss';

const Products: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetProducts = useCallback(async () => {
    setProducts(await ProductService.getAllProducts());
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleSearch = useCallback((query: string) => {
    console.log('aaa', query);
  }, []);

  const handleCreateProducts = useCallback(() => {
    history.push('/products/create');
  }, []);

  return (
    <div id="products">
      <div className="header">
        <DefaultButton typeButton="primary" onClick={handleCreateProducts}>
          cadastrar
        </DefaultButton>

        <DefaultSearchBar placeholder="Buscar" onSearch={handleSearch} />
      </div>

      <div className="body">
        <DefaultTable
          data={products}
          headers={[
            { headerKey: 'Name', headerTitle: 'Nome' },
            { headerKey: 'Value', headerTitle: 'Valor' },
            { headerKey: 'Description', headerTitle: 'Descrição' },
            { headerKey: 'StockQtd', headerTitle: 'Quantidade em Estoque' },
          ]}
          titleTable="Produtos"
          emptyTableMessage="Sem produtos cadastrados"
        />
      </div>
    </div>
  );
};

export default Products;
