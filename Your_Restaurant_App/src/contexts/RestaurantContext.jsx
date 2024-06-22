import { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../constants/restaurants";

const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [cuisines, setCuisines] = useState(cuisineData);
  return (
    <RestaurantContext.Provider value={{ restaurants, cuisines }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context)
    throw new Error("an Error occurred while getting data from the context!");

  return context;
};
