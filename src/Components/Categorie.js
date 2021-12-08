import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuIten';

const Categorie = function ({ itens, title }) {
  return (
    <StyledCategorie>

      <h2 className="menu-title">{title}</h2>
      <div className="menu-itens">
        {
          itens.map((item) => <MenuItem key={item.productId} menuItem={item} />)
        }
      </div>
    </StyledCategorie>
  );
};

export default Categorie;

const StyledCategorie = styled.div`
    margin: 31px 0 0 0;
    max-width: calc(100% - 19px);

    .menu-title{
    font-family: var(--fontHeader);
    font-size: 26px;
    line-height: 32px;
    }
    .menu-itens{
    display: flex;
    overflow-x: scroll;
    }

    .categorie-header{
      display: flex;
      justify-content: space-between;
    }

    .button-area{
      display: flex;
      gap: 8px;
    }
`;
