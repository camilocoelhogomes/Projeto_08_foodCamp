import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TopBar from '../../Components/StyledTopBar';
import CategorieForm from './components/CategorieForm';
import ProductForm from './components/ProductForm';
import { useRestaurant } from '../../context/RestaurantContext';
import foodCampApi from '../../services/api/foodCamp';

const Owner = function () {
  const { restaurantData, setRestaurantData } = useRestaurant();
  const { restaurantUrl } = useParams();
  console.log(restaurantData);
  useEffect(() => {
    foodCampApi.getRestaurantInfo({ url: restaurantUrl })
      .then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <StyledOwner>
      <TopBar />
      <CategorieForm />
      <ProductForm />
    </StyledOwner>
  );
};

export default Owner;

const StyledOwner = styled.div`
padding: 92px 0 0 0;
`;
