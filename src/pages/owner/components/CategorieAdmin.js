import React from 'react';
import styled from 'styled-components';
import { IoMdCreate } from 'react-icons/io';
import MenuItemAdmin from './MenuItemAdmin';
import SubmitButton from './SubmitButton';
import { useEditMenu } from '../../../context/EditMenuContext';

const CategorieAdmin = function ({ itens, title, id }) {
  const { setNewCategorie } = useEditMenu();
  const updateCategorie = () => {
    setNewCategorie({
      categorieId: id,
      categorieName: title,
    });
  };
  return (
    <StyledCategorieAdmin>
      <div className="categorie-header">
        <h2 className="menu-title">{title}</h2>
        <SubmitButton onClick={updateCategorie}>
          <IoMdCreate />
        </SubmitButton>
      </div>
      <div className="menu-itens">
        {
          itens.map((item) => <MenuItemAdmin key={item.productId} menuItem={item} />)
        }
      </div>
    </StyledCategorieAdmin>
  );
};

export default CategorieAdmin;

const StyledCategorieAdmin = styled.div`
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
`;
