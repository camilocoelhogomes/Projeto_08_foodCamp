import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuIten';

const Categorie = function ({ itens, title }) {
  return (
    <StyledCategorie>

      <h2>{title}</h2>
      {
        itens.map((item) => <MenuItem menuItem={item} />)
      }
    </StyledCategorie>
  );
};

export default Categorie;

const StyledCategorie = styled.div``;
