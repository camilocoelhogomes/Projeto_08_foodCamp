import React, {
  useState,
  createContext,
  useMemo,
  useContext,
} from 'react';

const RestaurantContextProvider = createContext();

const RestaurantContext = function ({ children }) {
  const [restaurantData, setRestaurantData] = useState();
  const constextValue = useMemo(() => ({
    restaurantData,
    setRestaurantData,
  }), [restaurantData,
    setRestaurantData]);

  return (
    <RestaurantContextProvider.Provider value={constextValue}>
      { children }
    </RestaurantContextProvider.Provider>
  );
};

export default RestaurantContext;

export const useRestaurant = () => useContext(RestaurantContextProvider);
