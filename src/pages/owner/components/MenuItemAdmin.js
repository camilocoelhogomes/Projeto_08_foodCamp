import React from 'react';
import styled from 'styled-components';
import { useOrder } from '../../../context/OrderContext';

const MenuItemAdmin = function ({ menuItem }) {
  const { orderData, updateOrder } = useOrder();

  return (
    <StyledMenuItemAdmin isSelected={orderData.some((item) => item === menuItem.productId)}>
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
