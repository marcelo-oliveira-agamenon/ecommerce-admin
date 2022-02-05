import React, { useState, useEffect, useCallback } from 'react';
import {
  DefaultInput,
  DefaultTextArea,
  DefaultSelect,
  UploadImage,
  DefaultButton,
} from '../../components';
import { CreateOrUpdateProduct } from '../../models/product';
import CategoryServices from '../../services/category';
import './style.scss';

const InsertProduct: React.FC = () => {
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
    Rate: 0,
    ProductImage: [],
  });
  const [categoriesForSelect, setCategoriesForSelect] = useState<
    Array<{
      value: string | number;
      label: string | number;
    }>
  >([]);

  const getAllCategoriesForSelect = useCallback(async () => {
    const categories = (await CategoryServices.getAllCategories()).map((category) => {
      const obj = {
        value: category.ID,
        label: category.Name,
      };

      return obj;
    });

    setCategoriesForSelect(categories);
  }, []);

  useEffect(() => {
    getAllCategoriesForSelect();
  }, []);

  const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const propName = event.target.name;
    setProduct({ ...product, [propName]: event.target.value });
  };

  const handleSubmitProduct = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
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

        <DefaultTextArea
          label="Descrição do Produto"
          name="Description"
          rows={10}
          value={product.Description}
          onChange={(event) => setProduct({ ...product, Description: event.target.value })}
          required
        />

        <DefaultTextArea
          label="Detalhes Técnicos"
          name="TecnicalDetails"
          rows={10}
          value={product.TecnicalDetails}
          onChange={(event) => setProduct({ ...product, TecnicalDetails: event.target.value })}
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

        <UploadImage onUploadImage={() => {}} />

        <DefaultButton typeButton="primary" type="submit">
          confirmar
        </DefaultButton>
      </form>
    </div>
  );
};

export default InsertProduct;
