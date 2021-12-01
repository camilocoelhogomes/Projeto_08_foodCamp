import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import StyledInput from '../../../Components/StyledInput';
import UserContext from '../../../context/UserContext';
import foodCampApi from '../../../services/api/foodCamp';
import { useRestaurant } from '../../../context/RestaurantContext';

const CategorieForm = function () {
  const [newCategorie, setNewCategorie] = useState('');
  const { restaurantUrl } = useParams();
  const { restaurantAuth } = useContext(UserContext);
  const { setRestaurantData } = useRestaurant();
  const submitForm = (e) => {
    e.preventDefault();
    foodCampApi.postCategorie(
      {
        token: restaurantAuth.userToken,
        categorie: newCategorie,
        restaurantUrl,
      },
    )
      .then((res) => {
        setRestaurantData(res.data);
        setNewCategorie('');
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <StyledCategorieForm onSubmit={submitForm}>
      <h2>Inserir Categoria</h2>
      <div className="input-area">
        <StyledInput
          required
          value={newCategorie}
          onChange={(e) => setNewCategorie(e.target.value)}
        />
        <button className="submit-categorie" type="submit">
          <IoIosSend size="29px" />
        </button>
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
`;
