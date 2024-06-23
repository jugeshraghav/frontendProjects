import { Box, Container, Typography } from "@mui/material";
import { useRestaurantContext } from "../contexts/RestaurantContext";
import { Restaurant } from "../components/Restaurant";
import { CuisineSelector } from "../components/CuisineSelector";

export const Home = () => {
  const { filteredRestaurants, cuisines } = useRestaurantContext();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        gap: "40px",
      }}
    >
      {/* Cusine selectors */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center" }}
          color="primary"
        >
          Select your Cuisine
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "10px",
          }}
        >
          {cuisines.map((cuisine) => (
            <CuisineSelector key={cuisine.id} cuisine={cuisine} />
          ))}
        </Box>
      </Box>

      {/* restaurant with their menu */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {" "}
        {filteredRestaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}{" "}
      </Box>
    </Container>
  );
};
