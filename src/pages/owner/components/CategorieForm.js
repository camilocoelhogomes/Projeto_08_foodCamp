import React from 'react';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';
import StyledInput from '../../../Components/StyledInput';

const CategorieForm = function () {
  return (
    <StyledCategorieForm>
      <h2>Inserir Categoria</h2>
      <div className="input-area">
        <StyledInput value="" />
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
