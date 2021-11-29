import React, { useState, useMemo } from 'react';
import GlobalStyle from './assets/style/GlobalStyle';
import RoutesConfig from './RoutesConfig/RoutesConfig';
import UserContext from './context/UserContext';

const App = function () {
  const [userSign, setUserSign] = useState();

  const updateUserSign = ({ input, value }) => {
    const newUserSign = { ...userSign };
    newUserSign[input] = value;
    setUserSign(newUserSign);
  };

  const userContext = useMemo(() => ({
    userSign,
    updateUserSign,
  }), [userSign, updateUserSign]);

  return (
    <div className="App">
      <UserContext.Provider value={userContext}>
        <GlobalStyle />
        <RoutesConfig />
      </UserContext.Provider>
    </div>
  );
};

export default App;
