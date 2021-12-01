import React from 'react';
import styled from 'styled-components';
import TopBar from '../../Components/StyledTopBar';
import CategorieForm from './components/CategorieForm';
import ProductForm from './components/ProductForm';

const Owner = function () {
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
