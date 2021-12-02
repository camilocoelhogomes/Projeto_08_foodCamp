import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BottonBar from '../../Components/BottonBar';
import TopBar from '../../Components/StyledTopBar';
import { useRestaurant } from '../../context/RestaurantContext';
import foodCampApi from '../../services/api/foodCamp';
import Menu from './components/Menu';

const Restaurant = function () {
  const { restaurantData, setRestaurantData } = useRestaurant();
  const { restaurantUrl } = useParams();
  useEffect(() => {
    foodCampApi.getRestaurantInfo({ url: restaurantUrl })
      .then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  if (!restaurantData) return <div />;
  return (
    <StyledRestaurant>
      <TopBar />
      <Menu />
      <BottonBar />
    </StyledRestaurant>
  );
};

export default Restaurant;

const StyledRestaurant = styled.div`
padding: 92px 0;
display: flex;
flex-direction: column;
gap: 16px;
`;
