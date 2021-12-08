import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const BottonBar = function () {
  const { orderData } = useOrder();

  return (
    <StyledBottonBar haveOrders={orderData.length} className="botton-bar">
      <button className="button-order" type="button">
        <Link to="/review"><p className="button-text">Fechar o Pedido</p></Link>
      </button>
    </StyledBottonBar>
  );
};

export default BottonBar;

const StyledBottonBar = styled.div`
  position: fixed;
    bottom: 0;
    left: 0;
    height: 92px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    .button-order{
    height: 60px;
    width: calc(100% - 40px);
    border-radius: 60px;
    border: none;
    background: ${({ haveOrders }) => (!haveOrders ? '#CBCBCB' : '#32B72F')};
    font-family:'Roboto', sans-serif;
    font-size: 20px;
    color: #ffffff
    }
`;
