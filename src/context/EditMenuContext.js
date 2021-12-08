import React, {
  useState,
  createContext,
  useMemo,
  useContext,
} from 'react';

const Context = createContext();

const EditMenuContext = function ({ children }) {
  const [newCategorie, setNewCategorie] = useState('');
  const [product, setProduct] = useState();
  const updateProduct = ({ value, input }) => {
    const newProduct = { ...product };
    newProduct[input] = value;
    setProduct(newProduct);
  };
  const updateCategorie = ({ value, input }) => {
    const categorie = { ...newCategorie };
    categorie[input] = value;
    setNewCategorie(categorie);
  };
  const constextValue = useMemo(() => ({
    newCategorie,
    setNewCategorie,
    product,
    setProduct,
    updateProduct,
    updateCategorie,
  }), [newCategorie,
    setNewCategorie,
    product,
    setProduct,
    updateProduct,
    updateCategorie]);

  return (
    <Context.Provider value={constextValue}>
      { children }
    </Context.Provider>
  );
};

export default EditMenuContext;

export const useEditMenu = () => useContext(Context);
