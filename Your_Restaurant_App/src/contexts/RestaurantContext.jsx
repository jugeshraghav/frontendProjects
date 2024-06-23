import { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../constants/restaurants";

const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [cuisines, setCuisines] = useState(cuisineData);

  const filteredRestaurants =
    selectedCuisine !== null
      ? restaurants.filter((restaurant) => {
          return selectedCuisine.id === restaurant.cuisine_id;
        })
      : restaurants;

  //handlers
  const addReviewHandler = (review, restaurantId) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === restaurantId
        ? { ...restaurant, ratings: [...restaurant.ratings, review] }
        : { ...restaurant }
    );

    setRestaurants(updatedRestaurants);
  };
  return (
    <RestaurantContext.Provider
      value={{
        filteredRestaurants,
        cuisines,
        selectedCuisine,
        setSelectedCuisine,
        addReviewHandler,
      }}
    >
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
