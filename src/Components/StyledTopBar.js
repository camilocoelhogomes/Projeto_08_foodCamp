import React from 'react';
import styled from 'styled-components';
import { useRestaurant } from '../context/RestaurantContext';

const TopBar = function () {
  const { restaurantData } = useRestaurant();
  return (
    <StyledTopBar>
      <div className="restaurant-logo-area">
        <img className="restaurant-logo-img" src={restaurantData.restaurantImg} alt="restaurant" />
      </div>
      <div>
        <h1 className="top-bar-title">
          {restaurantData.restaurantName}
        </h1>
      </div>
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
  flex-direction: row;
  justify-content: start;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  gap: 8px;

  .top-bar-subtitle{
  font-size: 18px;
  line-height: 21px;
  }
  .restaurant-logo-area{
    background-color: #ffffff;
    height: 76px;
    width: 76px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .restaurant-logo-img{
    width: 100%;

  }
`;
