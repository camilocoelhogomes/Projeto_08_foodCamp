import React from 'react';
import styled from 'styled-components';
import Categorie from '../../../Components/Categorie';
import { useRestaurant } from '../../../context/RestaurantContext';

const Menu = function () {
  const { restaurantData } = useRestaurant();
  return (
    <StyledMenu>
      <h1>Menu</h1>
      {restaurantData.categories
        .map(
          (categorie) => (
            <Categorie
              key={categorie.categorieId}
              itens={categorie.categorieItens}
              title={categorie.categorieName}
            />
          ),
        )}
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.div``;
