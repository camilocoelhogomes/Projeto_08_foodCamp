import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';
import StyledInput from '../../../Components/StyledInput';

const ProductForm = function () {
  const [product, setProduct] = useState({

  });
  const updateProduct = ({ value, input }) => {
    const newProduct = { ...product };
    newProduct[input] = value;
    setProduct(newProduct);
  };

  return (
    <StyledProductForm>
      <h2>Inserir Produto</h2>
      <div className="form-area">
        <div className="input-area">
          <StyledInput
            value={product.productName || ''}
            placeholder="Título"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productName' })}
          />
          <StyledInput
            value={product.productImg || ''}
            placeholder="URL da image"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productImg' })}
          />
          <StyledInput
            value={product.productDescription || ''}
            placeholder="Descrição"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productDescription' })}
          />
          <StyledInput
            value={product.productPrice || ''}
            placeholder="Preço"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productPrice' })}
          />
          <StyledInput
            value={product.productNumber || ''}
            placeholder="Número do Produto"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productNumber' })}
          />
          <StyledInput
            value={product.categorieId || ''}
            placeholder="Categoria do Produto"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'categorieId' })}
          />
        </div>
        <button className="submit-categorie" type="submit">
          <IoIosSend size="29px" />
        </button>
      </div>
    </StyledProductForm>
  );
};

export default ProductForm;

const StyledProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .form-area{
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
  }
  .input-area{
   display: flex;
   gap:8px;
   flex-direction: column;
   flex-grow: 1;
 }

 .submit-categorie{
   background: #CF2B2B;
   color: #ffffff;
   border-radius: 5px;
   width: 58px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
`;
