import { Box, Typography } from "@mui/material";
import { FoodCard } from "./FoodCard";

export const Restaurant = ({ restaurant }) => {
  return (
    <>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h5" color="secondary">
          {restaurant?.name}
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {restaurant.menu.map((foodItem) => (
            <FoodCard key={foodItem.name} foodItem={foodItem} />
          ))}
        </Box>
      </Box>
    </>
  );
};
