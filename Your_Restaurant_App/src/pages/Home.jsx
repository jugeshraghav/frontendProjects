import { Box, Container, Typography } from "@mui/material";
import { useRestaurantContext } from "../contexts/RestaurantContext";
import { Restaurant } from "../components/Restaurant";
import { CuisineSelector } from "../components/CuisineSelector";

export const Home = () => {
  const { restaurants, cuisines } = useRestaurantContext();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      {/* Cusine selectors */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">
          Select Restaurants based on your favourite cuisine.
        </Typography>
        {cuisines.map((cuisine) => (
          <CuisineSelector key={cuisine.id} cuisine={cuisine} />
        ))}
      </Box>

      <Typography variant="h4" color="primary">
        Your Restaurant App
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {" "}
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}{" "}
      </Box>
    </Container>
  );
};
