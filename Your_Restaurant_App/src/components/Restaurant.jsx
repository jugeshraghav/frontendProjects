import { useNavigate } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";
import { FoodCard } from "./FoodCard";

export const Restaurant = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h5" color="primary" sx={{ marginBottom: "10px" }}>
          Dishes from {restaurant?.name}
        </Typography>
        <Grid container spacing="15">
          {restaurant.menu.map((foodItem) => (
            <Grid
              item
              sm={1}
              md={3}
              key={foodItem.name}
              onClick={() => navigate(`/restaurant_details/${restaurant.name}`)}
            >
              <FoodCard foodItem={foodItem} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
