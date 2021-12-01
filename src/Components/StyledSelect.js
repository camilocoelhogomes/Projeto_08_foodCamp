import styled from 'styled-components';
import React from 'react';

const StyledSelect = function ({ options, ...otherPropos }) {
  return (
    <Styled {...otherPropos}>
      {
        options
          ? options.map((item) => (
            <option
              value={item.categorieId}
              key={item.categorieId}
            >
              {item.categorieName}
            </option>
          ))
          : ''
      }
    </Styled>
  );
};

export default StyledSelect;

const Styled = styled.select`
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
`;
