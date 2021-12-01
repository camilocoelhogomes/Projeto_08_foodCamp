import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import StyledInput from '../../../Components/StyledInput';
import { useRestaurant } from '../../../context/RestaurantContext';
import StyledSelect from '../../../Components/StyledSelect';
import UserContext from '../../../context/UserContext';
import foodCampApi from '../../../services/api/foodCamp';

const ProductForm = function () {
  const { restaurantData, setRestaurantData } = useRestaurant();
  const { restaurantAuth } = useContext(UserContext);
  const [product, setProduct] = useState();
  const { restaurantUrl } = useParams();
  const updateProduct = ({ value, input }) => {
    const newProduct = { ...product };
    newProduct[input] = value;
    setProduct(newProduct);
  };
  const submit = (e) => {
    e.preventDefault();
    foodCampApi.postProduct(
      {
        ...product,
        token: restaurantAuth.userToken,
        restaurantUrl,
      },
    ).then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err.response));
  };
  return (
    <StyledProductForm onSubmit={submit}>
      <h1>Inserir Produto</h1>
      <div className="form-area">
        <div className="input-area">
          <StyledInput
            required
            value={product?.productName || ''}
            placeholder="Título"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productName' })}
          />
          <StyledInput
            required
            value={product?.productImg || ''}
            placeholder="URL da image"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productImg' })}
          />
          <StyledInput
            required
            value={product?.productDescription || ''}
            placeholder="Descrição"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productDescription' })}
          />
          <StyledInput
            required
            value={product?.productPrice || ''}
            placeholder="Preço"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productPrice' })}
          />
          <StyledInput
            required
            value={product?.productNumber || ''}
            placeholder="Número do Produto no cardápio"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'productNumber' })}
          />
          <StyledSelect
            required
            value={product?.categorieId}
            placeholder="Categoria do Produto"
            onChange={(e) => updateProduct({ value: e.target.value, input: 'categorieId' })}
            options={restaurantData?.categories}
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
