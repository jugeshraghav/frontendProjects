import { Box, Button } from "@mui/material";
import { useRestaurantContext } from "../contexts/RestaurantContext";

export const CuisineSelector = ({ cuisine }) => {
  const { selectedCuisine, filteredRestaurants, setSelectedCuisine } =
    useRestaurantContext();

  return (
    <Button
      variant={
        selectedCuisine !== null && selectedCuisine.id === cuisine.id
          ? "contained"
          : "outlined"
      }
      onClick={() => setSelectedCuisine(cuisine)}
    >
      {cuisine.name}
    </Button>
  );
};
