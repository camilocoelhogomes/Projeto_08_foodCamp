import React from 'react';
import styled from 'styled-components';
import { useRestaurant } from '../../../context/RestaurantContext';
import CategorieAdmin from './CategorieAdmin';

const MenuPreview = function () {
  const { restaurantData } = useRestaurant();
  return (
    <StyledMenuPreview>
      <h1>Menu Admin</h1>
      {restaurantData.categories
        .map(
          (categorie) => (
            <CategorieAdmin
              key={categorie.categorieId}
              id={categorie.categorieId}
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
