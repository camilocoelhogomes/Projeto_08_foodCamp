import React from 'react';
import styled from 'styled-components';

const MenuItem = function ({ menuItem }) {
  console.log(menuItem);
  return (
    <StyledMenuItem>
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

      </div>
    </StyledMenuItem>
  );
};

export default MenuItem;

const StyledMenuItem = styled.div`
    width: 172px;
    height: 216px;
    background-color: #ffffff;
    border-radius: 9px;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
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

.item-value{
  font-size: 16px;
  color: #000000;
  font-weight: normal;
  line-height: 19px;
}

`;
