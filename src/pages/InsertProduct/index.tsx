import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
import ProductImageService from '../../services/productImage';
import { CreateOrUpdateProduct } from '../../models/product';
import CategoryServices from '../../services/category';
import './style.scss';

const InsertProduct: React.FC = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [product, setProduct] = useState<CreateOrUpdateProduct>({
    name: '',
    categoryid: '',
    value: 0,
    stockqtd: 0,
    description: '',
    type: '',
    tecnicalDetails: '',
    hasPromotion: false,
    discount: 0,
    hasShipping: false,
    shippingPrice: 0,
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

      const auxProduct: CreateOrUpdateProduct = {
        ...product,
        ProductImage: undefined,
        discount: product.hasPromotion ? product.discount : undefined,
        shippingPrice: product.hasShipping ? product.shippingPrice : undefined,
      };

      const form = new FormData();
      const entries = Object.entries(auxProduct);
      entries.forEach((value) => {
        if (value[1]) {
          form.append(value[0], value[1]);
        }
      });

      await ProductService.insertNewProduct(form).then((response) => {
        if (product.ProductImage && product.ProductImage.length) {
          product.ProductImage.forEach(async (file) => {
            const imageForm = new FormData();
            imageForm.append('img', file);

            await ProductImageService.insertProductImage(response.ID, imageForm);
          });
        }

        history.push('/products');
      });
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
            name="name"
            label="Nome"
            value={product.name}
            onChange={handleInputsChange}
            required
          />

          <DefaultInput
            name="value"
            type="number"
            label="Valor (R$)"
            value={product.value !== 0 ? product.value : undefined}
            onChange={handleInputsChange}
            required
          />

          <div className="grid_element">
            <DefaultInput
              type="text"
              name="type"
              label="Tipo da Unidade no Estoque"
              value={product.type}
              onChange={handleInputsChange}
              required
            />

            <DefaultInput
              name="stockqtd"
              type="number"
              label="Quantidade em Estoque"
              value={product.stockqtd !== 0 ? product.stockqtd : undefined}
              onChange={handleInputsChange}
              required
            />
          </div>

          <div className="grid_element">
            <DefaultCheckboxOptions
              type="promotion"
              title="Este produto possui promoção?"
              options={[
                { label: 'Sim', checked: product.hasPromotion },
                { label: 'Não', checked: !product.hasPromotion },
              ]}
              onChange={() => setProduct({ ...product, hasPromotion: !product.hasPromotion })}
            />

            {product.hasPromotion && (
              <DefaultInput
                name="discount"
                type="number"
                label="Desconto (R$)"
                value={product.discount !== 0 ? product.discount : undefined}
                onChange={handleInputsChange}
                required
              />
            )}
          </div>

          <div className="grid_element">
            <DefaultCheckboxOptions
              type="shipping"
              title="Este produto possui frete?"
              options={[
                { label: 'Sim', checked: product.hasShipping },
                { label: 'Não', checked: !product.hasShipping },
              ]}
              onChange={() => setProduct({ ...product, hasShipping: !product.hasShipping })}
            />

            {product.hasShipping && (
              <DefaultInput
                name="shippingPrice"
                type="number"
                label="Preço do Frete (R$)"
                value={product.shippingPrice !== 0 ? product.shippingPrice : undefined}
                onChange={handleInputsChange}
                required
              />
            )}
          </div>

          <DefaultTextArea
            label="Descrição do Produto"
            name="description"
            rows={10}
            value={product.description}
            onChange={handleInputsChange}
            required
          />

          <DefaultTextArea
            label="Detalhes Técnicos"
            name="tecnicalDetails"
            rows={10}
            value={product.tecnicalDetails}
            onChange={handleInputsChange}
            required
          />

          <DefaultSelect
            options={categoriesForSelect}
            label="Categoria"
            placeholder="Selecione uma categoria"
            value={product.categoryid !== '' ? product.categoryid : undefined}
            onChange={(event) => setProduct({ ...product, categoryid: event.target.value })}
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
