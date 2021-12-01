import React, {
  useState,
  createContext,
  useMemo,
  useContext,
} from 'react';

export const OrderContextProvider = createContext();

const OrderContext = function ({ children }) {
  const [orderData, setOrderData] = useState([]);
  const updateOrder = ({ itemId, add, remove }) => {
    const newOrder = [...orderData];
    if (!!add === !!remove) return null;
    if (add) {
      newOrder.push(itemId);
      return setOrderData(newOrder);
    }
    const removeIndex = newOrder.indexOf(itemId);
    if (removeIndex === -1) return null;
    newOrder.splice(removeIndex, 1);
    return setOrderData(newOrder);
  };

  const constextValue = useMemo(() => ({
    orderData,
    updateOrder,
  }), [orderData,
    updateOrder]);

  return (
    <OrderContextProvider.Provider value={constextValue}>
      { children }
    </OrderContextProvider.Provider>
  );
};

export default OrderContext;

export const useOrder = () => useContext(OrderContextProvider);
