import React from 'react';
import styled from 'styled-components';
import Categorie from '../../../Components/Categorie';
import { useRestaurant } from '../../../context/RestaurantContext';

const MenuPreview = function () {
  const { restaurantData } = useRestaurant();
  console.log(restaurantData);
  return (
    <StyledMenuPreview>
      <h1>Menu Admin</h1>
      {restaurantData.categories
        .map(
          (categorie) => (
            <Categorie
              itens={categorie.categorieItens}
              title={categorie.categorieName}
            />
          ),
        )}
    </StyledMenuPreview>
  );
};

export default MenuPreview;

const StyledMenuPreview = styled.div``;
