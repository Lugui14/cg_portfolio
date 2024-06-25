import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [rotation, setRotation] = useState(0);

  const handleSetRotation = (y) => () => {
    setRotation(y);
  };

  return (
    <MenuContext.Provider value={{ rotation, handleSetRotation }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
