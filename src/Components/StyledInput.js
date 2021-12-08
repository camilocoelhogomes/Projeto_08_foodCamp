import styled from 'styled-components';
import React from 'react';

const StyledInput = function ({ errorMessage, ...otherPropos }) {
  return (
    <Styled>
      <input className="input-area" {...otherPropos} />
      <div className="error-alert">
        <p>{errorMessage || ''}</p>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

  .input-area{
    width: 100%;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: ${({ error }) => (error ? '1px solid #FF0000' : 'none')};
    font-size: 20px;
    line-height: 23px;
    color: ${({ error }) => (error ? '#FF0000' : '#000000')};
    padding: 17px 15px;
    font-family: 'Raleway', sans-serif;
    flex-grow: 1;
    ::placeholder{
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 23px;
        color: ${({ error }) => (error ? '#FF0000' : '#aaa')};
    }
  }

  .error-alert{
    height: 12px;
    padding: 0 18px;
    p{
    color: #ff0000;
    font-family: 'primaryBold';
    font-size: 12px;
    line-height: 18px;
    }
  }
`;

export default StyledInput;
