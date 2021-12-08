import React, {
  useState,
  createContext,
  useMemo,
  useContext,
} from 'react';

const Context = createContext();

const UserContext = function ({ children }) {
  const [userSign, setUserSign] = useState();
  const [restaurantAuth, setRestaurantAuth] = useState();

  const updateUserSign = ({ input, value }) => {
    const newUserSign = { ...userSign };
    newUserSign[input] = value;
    setUserSign(newUserSign);
  };

  const contextValue = useMemo(() => ({
    userSign,
    updateUserSign,
    restaurantAuth,
    setRestaurantAuth,
  }), [userSign,
    updateUserSign,
    restaurantAuth,
    setRestaurantAuth]);

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
};

export default UserContext;

export const useUser = () => useContext(Context);
