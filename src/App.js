import React from 'react';
import GlobalStyle from './assets/style/GlobalStyle';
import RoutesConfig from './RoutesConfig/RoutesConfig';

const App = function () {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesConfig />
    </div>
  );
};

export default App;
