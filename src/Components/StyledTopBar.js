import React from 'react';
import styled from 'styled-components';

const TopBar = function () {
  return (
    <StyledTopBar>
      <h1 className="top-bar-title">
        FoodCamp
      </h1>
      <p className="top-bar-subtitle">
        Sua comida em 6 minutos
      </p>
    </StyledTopBar>
  );
};

export default TopBar;

const StyledTopBar = styled.div`
  height: 92px;
  background-color: #CF2B2B;
  width: 100%;
  color: #ffffff;
  padding: 0 0 0 21px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .top-bar-subtitle{
  font-size: 18px;
  line-height: 21px;
  }
`;
