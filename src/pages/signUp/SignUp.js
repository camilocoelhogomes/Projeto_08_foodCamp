import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PassWordRequirements from './PassWordRequirements';
import StyledButton from '../../Components/StyledButton';
import StyledInput from '../../Components/StyledInput';
import UserContext from '../../context/UserContext';
import foodCampApi from '../../services/api/foodCamp';

const SignUp = function () {
  const { userSign, updateUserSign } = useUser;

  const submitSignUp = (e) => {
    e.preventDefault();
    if (!/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}).*$/.test(userSign.restaurantPassword)) {
      return;
    }
    foodCampApi.signUpApi(userSign)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledLogin onSubmit={submitSignUp}>
      <header className="header-login">
        <h1>FoodCamp</h1>
      </header>
      <form className="submit-form">
        <StyledInput
          required
          placeholder="Nome do Restaurante"
          value={(userSign?.restaurantName || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantName', value: e.target.value })}
        />
        <StyledInput
          required
          placeholder="E-mail"
          value={(userSign?.restaurantEmail || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantEmail', value: e.target.value })}
          type="email"
        />
        <StyledInput
          required
          placeholder="Número do Wpp"
          value={(userSign?.restaurantWppNumber || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantWppNumber', value: e.target.value })}
        />
        <StyledInput
          required
          placeholder="Url para a Imagem de Perfil"
          value={(userSign?.restaurantImg || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantImg', value: e.target.value })}
        />
        <StyledInput
          required
          placeholder="Link para o Restaurante"
          value={(userSign?.restaurantUrlName || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantUrlName', value: e.target.value })}
        />
        <StyledInput
          required
          placeholder="Senha"
          type="password"
          value={(userSign?.restaurantPassword || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantPassword', value: e.target.value })}
        />
        <StyledInput
          required
          placeholder="Confirme a Senha"
          type="password"
          value={(userSign?.restaurantConfirmPassword || '')}
          onChange={(e) => updateUserSign({ input: 'restaurantConfirmPassword', value: e.target.value })}
        />
        <PassWordRequirements
          password={userSign?.restaurantPassword}
          passwordConfirm={userSign?.restaurantConfirmPassword}
        />
        <StyledButton type="submit">
          Cadastrar
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

export default SignUp;

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
