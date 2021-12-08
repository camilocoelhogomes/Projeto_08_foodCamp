import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import StyledButton from '../../../Components/StyledButton';
import StyledInput from '../../../Components/StyledInput';
import foodCampApi from '../../../services/api/foodCamp';
import { useRestaurant } from '../../../context/RestaurantContext';
import { useUser } from '../../../context/UserContext';

const SignIn = function () {
  const { userSign, updateUserSign, setRestaurantAuth } = useUser();
  const { setRestaurantData } = useRestaurant();
  const history = useHistory();
  const [error, setError] = useState(null);
  const submitSignIn = (e) => {
    e.preventDefault();
    foodCampApi.signInApi(userSign)
      .then((res) => {
        setError(null);
        setRestaurantAuth(res.data);
        setRestaurantData(null);
        history.push(`/owner/${res.data.url}`);
      })
      .catch(() => {
        setError('E-mail ou Senha incorretos');
      });
  };

  return (
    <StyledLogin onSubmit={submitSignIn}>
      <header className="header-login">
        <h1>FoodCamp</h1>
      </header>
      <form className="submit-form">
        <StyledInput
          required
          placeholder="E-mail"
          value={(userSign?.restaurantEmail || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantEmail', value: e.target.value })}
          type="email"
        />
        <StyledInput
          required
          placeholder="Senha"
          type="password"
          value={(userSign?.restaurantPassword || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantPassword', value: e.target.value })}
          errorMessage={error}
        />
        <StyledButton type="submit">
          Entrar
        </StyledButton>
        <Link to="/">
          <StyledButton themeType="secundary">
            Já tem uma conta? Entre Agora
          </StyledButton>
        </Link>
      </form>
    </StyledLogin>
  );
};

export default SignIn;

const StyledLogin = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: calc(100vh - 40px);
   gap:24px;

   .submit-form{
       display: flex;
       flex-direction: column;
       gap: 13px;
       width: 100%;
   }

`;
