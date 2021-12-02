import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TopBar from '../../Components/StyledTopBar';
import CategorieForm from './components/CategorieForm';
import ProductForm from './components/ProductForm';
import { useRestaurant } from '../../context/RestaurantContext';
import foodCampApi from '../../services/api/foodCamp';
import MenuPreview from './components/MenuPreview';
import EditMenuContext from '../../context/EditMenuContext';

const Owner = function () {
  const { restaurantData, setRestaurantData } = useRestaurant();
  const { restaurantUrl } = useParams();
  useEffect(() => {
    foodCampApi.getRestaurantInfo({ url: restaurantUrl })
      .then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  if (!restaurantData) return <div />;
  return (
    <StyledOwner>
      <EditMenuContext>
        <TopBar />
        <CategorieForm />
        <ProductForm />
        <MenuPreview />
      </EditMenuContext>
    </StyledOwner>
  );
};

export default Owner;

const StyledOwner = styled.div`
padding: 92px 0 0 0;
display: flex;
flex-direction: column;
gap: 16px;
`;
