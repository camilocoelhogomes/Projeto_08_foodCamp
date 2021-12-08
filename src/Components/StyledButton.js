import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 58px;
    background: ${({ themeType }) => (themeType === 'secundary' ? 'inherit' : '#CF2B2B')};
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: ${({ themeType }) => (themeType === 'secundary' ? '15px' : '20px')};
    line-height: 23px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    cursor: pointer;
`;

export default StyledButton;
