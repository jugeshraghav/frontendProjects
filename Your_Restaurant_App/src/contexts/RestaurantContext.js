import { createContext, useContext } from "react";

const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ items: 5 }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context)
    throw new Error(
      "The cuisines can be imported from Restaurant Context only!"
    );

  return context;
};
