import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PassWordRequirements from './PassWordRequirements';
import StyledButton from '../../Components/StyledButton';
import StyledInput from '../../Components/StyledInput';

const SignUp = function () {
  return (
    <StyledLogin>
      <header className="header-login">
        <h1>FoodCamp</h1>
      </header>
      <form className="submit-form">
        <StyledInput
          placeholder="Nome do Restaurante"
        />
        <StyledInput
          placeholder="E-mail"
          type="email"
        />
        <StyledInput
          placeholder="Número do Wpp"
        />
        <StyledInput
          placeholder="Url para a Imagem de Perfil"
        />
        <StyledInput
          placeholder="Link para o Restaurante"
        />
        <StyledInput
          placeholder="Senha"
          type="password"
        />
        <StyledInput
          placeholder="Confirme a Senha"
          type="password"
        />
        <PassWordRequirements password="oi" passwordConfirm="oi" />
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
