import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductService from '../../services/products';
import {
  DefaultButton,
  DefaultSearchBar,
  DefaultTable,
  DefaultModal,
  Pagination,
} from '../../components';
import { Product } from '../../models/product';

import './style.scss';

const Products: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductID, setSelectedProductID] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleGetProducts = useCallback(async (limit?: number, offset?: number) => {
    setProducts(
      await ProductService.getAllProducts({
        limit,
        offset,
      }),
    );
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleSearch = useCallback(async (query: string) => {
    setProducts(
      await ProductService.getAllProducts({
        name: query,
      }),
    );
  }, []);

  const handleCreateProducts = () => {
    history.push('/products/create');
  };

  const showDeleteModal = (productId: number | string) => {
    setShowModal(true);
    setSelectedProductID(productId.toString());
  };

  const handleEditProducts = (productId: number | string) => {
    history.push(`/products/edit/${productId}`);
  };

  const handleDeleteProduct = useCallback(async () => {
    await ProductService.deleteProduct(selectedProductID);
  }, [selectedProductID]);

  const cancelActionOnModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <DefaultModal
          titleText="Deletar"
          size="sm"
          overallText="Deseja deletar este produto?"
          onConfirmAction={handleDeleteProduct}
          onCancelAction={cancelActionOnModal}
          confirmBtnText="Deletar"
          cancelBtnText="cancelar"
        />
      )}

      <div id="products">
        <div className="header">
          <DefaultButton typeButton="primary" onClick={handleCreateProducts}>
            cadastrar
          </DefaultButton>

          <DefaultSearchBar
            placeholder="Buscar"
            onSearch={handleSearch}
            onClose={handleGetProducts}
          />
        </div>

        <div className="body">
          <DefaultTable
            data={products}
            headers={[
              { headerKey: 'Name', headerTitle: 'Nome' },
              { headerKey: 'Value', headerTitle: 'Valor (R$)' },
              { headerKey: 'Description', headerTitle: 'Descrição' },
              { headerKey: 'StockQtd', headerTitle: 'Quantidade em Estoque' },
            ]}
            titleTable="Produtos"
            emptyTableMessage="Sem produtos cadastrados"
            onDeleteRow={showDeleteModal}
            onEditRow={handleEditProducts}
            keyIdentifierAction="ID"
          />

          <Pagination quantityOfElements={30} changePage={handleGetProducts} />
        </div>
      </div>
    </>
  );
};

export default Products;
