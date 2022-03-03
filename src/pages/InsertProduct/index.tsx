import React, { useState, useEffect, useCallback } from 'react';
import {
  DefaultInput,
  DefaultTextArea,
  DefaultSelect,
  UploadImage,
  DefaultButton,
  DefaultModal,
  DefaultCheckboxOptions,
} from '../../components';
import ProductService from '../../services/products';
import { CreateOrUpdateProduct } from '../../models/product';
import CategoryServices from '../../services/category';
import './style.scss';

const InsertProduct: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [product, setProduct] = useState<CreateOrUpdateProduct>({
    Name: '',
    Categoryid: 0,
    Value: 0,
    StockQtd: 0,
    Description: '',
    TypeUnit: '',
    TecnicalDetails: '',
    HasPromotion: false,
    Discount: 0,
    HasShipping: false,
    ShippingPrice: 0,
    ProductImage: [],
  });
  const [categoriesForSelect, setCategoriesForSelect] = useState<
    Array<{
      value: string | number;
      label: string | number;
    }>
  >([]);

  const getAllCategoriesForSelect = async () => {
    const categories = (await CategoryServices.getAllCategories()).map((category) => {
      const obj = {
        value: category.ID,
        label: category.Name,
      };

      return obj;
    });

    setCategoriesForSelect(categories);
  };

  useEffect(() => {
    getAllCategoriesForSelect();
  }, []);

  const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const propName = event.target.name;
    setProduct({ ...product, [propName]: event.target.value });
  };

  const handleSubmitProduct = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const auxProduct = { ...product, ProductImage: undefined };
      await ProductService.insertNewProduct(auxProduct);
    },
    [product],
  );

  return (
    <>
      {showModal && (
        <DefaultModal
          titleText="Sucesso"
          size="sm"
          overallText="Produto cadastrado com sucesso"
          onConfirmAction={() => setShowModal(false)}
          confirmBtnText="Ok"
        />
      )}

      <div id="create_product">
        <form className="product_form" onSubmit={handleSubmitProduct}>
          <DefaultInput
            type="text"
            name="Name"
            label="Nome"
            value={product.Name}
            onChange={handleInputsChange}
            required
          />

          <DefaultInput
            name="Value"
            type="number"
            label="Valor (R$)"
            value={product.Value !== 0 ? product.Value : undefined}
            onChange={handleInputsChange}
            required
          />

          <div className="grid_element">
            <DefaultInput
              type="text"
              name="TypeUnit"
              label="Tipo da Unidade no Estoque"
              value={product.TypeUnit}
              onChange={handleInputsChange}
              required
            />

            <DefaultInput
              name="StockQtd"
              type="number"
              label="Quantidade em Estoque"
              value={product.StockQtd !== 0 ? product.StockQtd : undefined}
              onChange={handleInputsChange}
              required
            />
          </div>

          <div className="grid_element">
            <DefaultInput
              name="Discount"
              type="number"
              label="Desconto (R$)"
              value={product.Discount !== 0 ? product.Discount : undefined}
              onChange={handleInputsChange}
              required
            />

            <DefaultCheckboxOptions
              title="Este produto possui promoção?"
              options={[
                { label: 'Sim', checked: product.HasPromotion },
                { label: 'Não', checked: !product.HasPromotion },
              ]}
              onChange={() => setProduct({ ...product, HasPromotion: !product.HasPromotion })}
            />
          </div>

          <DefaultTextArea
            label="Descrição do Produto"
            name="Description"
            rows={10}
            value={product.Description}
            onChange={handleInputsChange}
            required
          />

          <DefaultTextArea
            label="Detalhes Técnicos"
            name="TecnicalDetails"
            rows={10}
            value={product.TecnicalDetails}
            onChange={handleInputsChange}
            required
          />

          <DefaultSelect
            options={categoriesForSelect}
            label="Categoria"
            placeholder="Selecione uma categoria"
            value={product.Categoryid !== 0 ? product.Categoryid : undefined}
            onChange={(event) => setProduct({ ...product, Categoryid: Number(event.target.value) })}
            required
          />

          <UploadImage
            placeholder="Clique para anexar novas imagens"
            onUploadImage={(images) => setProduct({ ...product, ProductImage: images })}
          />

          <div className="button_container">
            <DefaultButton typeButton="primary" type="submit">
              confirmar
            </DefaultButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default InsertProduct;
