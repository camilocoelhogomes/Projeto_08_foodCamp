import React from 'react';
import styled from 'styled-components';
import SignIn from './Components/SignIn';

const Home = function () {
  return (
    <StyledHome>
      <SignIn />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div``;
