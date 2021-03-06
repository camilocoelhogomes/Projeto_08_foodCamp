import React from 'react';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import StyledInput from '../../../Components/StyledInput';
import foodCampApi from '../../../services/api/foodCamp';
import { useRestaurant } from '../../../context/RestaurantContext';
import { useEditMenu } from '../../../context/EditMenuContext';
import { useUser } from '../../../context/UserContext';

const CategorieForm = function () {
  const { newCategorie, updateCategorie, setNewCategorie } = useEditMenu();
  const { restaurantUrl } = useParams();
  const { restaurantAuth } = useUser();
  const { setRestaurantData } = useRestaurant();
  const submitForm = (e) => {
    e.preventDefault();
    foodCampApi.postCategorie(
      {
        token: restaurantAuth.userToken,
        categorie: newCategorie.categorieName,
        categorieId: newCategorie.categorieId,
        restaurantUrl,
      },
    )
      .then((res) => {
        setRestaurantData(res.data);
        setNewCategorie({});
      });
  };

  return (
    <StyledCategorieForm onSubmit={submitForm}>
      <h1>Inserir Categoria</h1>
      <div className="input-area">
        <StyledInput
          required
          value={newCategorie.categorieName || ''}
          onChange={(e) => updateCategorie({ input: 'categorieName', value: e.target.value })}
        />
        <div className="button-area">
          <button className="submit-categorie" type="submit">
            <IoIosSend size="29px" />
          </button>
        </div>
      </div>
    </StyledCategorieForm>
  );
};

export default CategorieForm;

const StyledCategorieForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
 
  .input-area{
   display: flex;
   gap:8px;
 }

 .submit-categorie{
   background: #CF2B2B;
   color: #ffffff;
   border-radius: 5px;
   width: 58px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .button-area{
   display: flex;
 }
`;
