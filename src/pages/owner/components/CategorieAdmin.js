import React from 'react';
import styled from 'styled-components';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import MenuItemAdmin from './MenuItemAdmin';
import SubmitButton from './SubmitButton';
import { useEditMenu } from '../../../context/EditMenuContext';
import { useUser } from '../../../context/UserContext';
import foodCampApi from '../../../services/api/foodCamp';
import { useRestaurant } from '../../../context/RestaurantContext';

const CategorieAdmin = function ({ itens, title, id }) {
  const { setNewCategorie } = useEditMenu();
  const { restaurantAuth } = useUser();
  const { setRestaurantData } = useRestaurant();

  const updateCategorie = () => {
    setNewCategorie({
      categorieId: id,
      categorieName: title,
    });
  };

  const deleteCategorie = () => {
    foodCampApi.deleteCategorie({
      token: restaurantAuth.userToken,
      categorieId: id,
      restaurantUrl: restaurantAuth.url,
    }).then((res) => setRestaurantData(res.data));
  };

  return (
    <StyledCategorieAdmin>
      <div className="categorie-header">
        <h2 className="menu-title">{title}</h2>
        <div className="button-area">
          <SubmitButton onClick={updateCategorie}>
            <IoMdCreate />
          </SubmitButton>
          <SubmitButton onClick={deleteCategorie}>
            <IoMdTrash />
          </SubmitButton>
        </div>
      </div>
      <div className="menu-itens">
        {
          itens.map((item) => (
            <MenuItemAdmin
              key={item.productId}
              menuItem={item}
              categoryId={id}
            />
          ))
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

    .button-area{
      display: flex;
      gap: 8px;
    }
`;
