import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../contexts/RestaurantContext";

export const RestaurantDetails = () => {
  const { restaurantName } = useParams();
  const { filteredRestaurants } = useRestaurantContext();
  const currentRestaurant = filteredRestaurants.find(
    (res) => res.name === restaurantName
  );
  console.log(currentRestaurant);
  return (
    <>
      <h1>RestaurantDetails</h1>
    </>
  );
};
