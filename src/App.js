import React from 'react';
import GlobalStyle from './assets/style/GlobalStyle';
import RoutesConfig from './RoutesConfig/RoutesConfig';
import UserContext from './context/UserContext';

const App = function () {
  return (
    <div className="App">
      <UserContext>
        <GlobalStyle />
        <RoutesConfig />
      </UserContext>
    </div>
  );
};

export default App;
