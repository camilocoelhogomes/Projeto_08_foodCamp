import React from 'react';
import styled from 'styled-components';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { useOrder } from '../../../context/OrderContext';
import SubmitButton from './SubmitButton';
import { useEditMenu } from '../../../context/EditMenuContext';
import foodCampApi from '../../../services/api/foodCamp';
import { useUser } from '../../../context/UserContext';
import { useRestaurant } from '../../../context/RestaurantContext';

const MenuItemAdmin = function ({ menuItem, categorieId }) {
  const { orderData, updateOrder } = useOrder();
  const { setProduct } = useEditMenu();
  const { restaurantAuth } = useUser();
  const { setRestaurantData } = useRestaurant();
  const editItem = () => {
    setProduct({ ...menuItem, categorieId });
  };

  const deleteProduct = () => {
    foodCampApi.deleteProduct({
      token: restaurantAuth.userToken,
      productId: menuItem.productId,
      restaurantUrl: restaurantAuth.url,
    }).then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err.response));
  };
  return (

    <StyledMenuItemAdmin isSelected={orderData.some((item) => item === menuItem.productId)}>
      <div className="button-area">
        <SubmitButton onClick={editItem}>
          <IoMdCreate />
        </SubmitButton>
        <SubmitButton onClick={deleteProduct}>
          <IoMdTrash />
        </SubmitButton>
      </div>
      <img className="item-img" src={menuItem.productImg} alt={menuItem.productDescription} />
      <h2 className="item-title">
        {menuItem.productNumber}
        {'. '}
        {menuItem.productName}
      </h2>
      <p className="item-subtitle">
        {menuItem.productDescription}
      </p>

      <div className="value-qtd">
        <p className="item-value">
          {Number(menuItem.productPrice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
        <div className="item-qtd">
          <button
            type="button"
            className="dec-qtd"
            onClick={() => updateOrder({ itemId: menuItem.productId, remove: true })}
          >
            -
          </button>
          {orderData.filter((item) => item === menuItem.productId).length}
          <button
            type="button"
            className="add-qtd"
            onClick={() => updateOrder({ itemId: menuItem.productId, add: true })}
          >
            +
          </button>
        </div>
      </div>
    </StyledMenuItemAdmin>
  );
};

export default MenuItemAdmin;

const StyledMenuItemAdmin = styled.div`
    width: 172px;
    height: 216px;
    background-color: #ffffff;
    border-radius: 9px;
    box-shadow: ${({ isSelected }) => (isSelected ? '0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F;' : '0px 0px 10px -4px rgba(0, 0, 0, 0.25);')};
    display: flex;
    flex-direction: column;
    padding: 18px 14px 14px 14px;
    justify-content: space-between;
    margin: 18px 16px 0 0;

    .button-area{
      display: flex;
      gap: 8px;
      justify-content: space-between;
    }

  .item-title{
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
  }

  .item-subtitle{
    font-size: 15px;
    color: #a6a6a6;
    font-weight: 300px;
    line-height: 18px;
  }

.item-img{
    width: 144px;
    height: 87px;
    border-radius: 4px;
}

.item-value{
  font-size: 16px;
  color: #000000;
  font-weight: normal;
  line-height: 19px;
}

.value-qtd{
    display: flex;
    justify-content: space-between;
}

.dec-qtd{
    color: #CF2B2B;
}

.add-qtd {
    color: #32B72F;
}

`;
