import { useNavigate, useParams } from "react-router-dom";
import { useRestaurantContext } from "../contexts/RestaurantContext";

import { Box, Button, IconButton, Typography } from "@mui/material";
import { RatingCard } from "../components/RatingCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { ReviewModal } from "../components/ReviewModal";
export const RestaurantDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { restaurantName } = useParams();
  const navigate = useNavigate();

  const { filteredRestaurants } = useRestaurantContext();
  const currentRestaurant = filteredRestaurants.find(
    (res) => res.name === restaurantName
  );
  const ratings = currentRestaurant?.ratings;
  const menuItems = currentRestaurant.menu
    .reduce((acc, { name }) => [...acc, name], [])
    .join(" ,");

  //handlers
  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);
  return (
    <>
      <ReviewModal
        restaurantId={currentRestaurant?.id}
        isModalOpen={isModalOpen}
        closeModalHandler={closeModalHandler}
      />
      <Box
        sx={{
          maxWidth: "700px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Back Button */}
        <IconButton
          aria-label="back button"
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "100%",
          }}
          color="primary"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* restaurant Details */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "start",
              gap: "10px",
            },
          }}
        >
          <Box>
            <Typography variant="h4" color="primary">
              {currentRestaurant?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Menu Items : {menuItems}{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address : {currentRestaurant?.address}{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average Rating : {currentRestaurant?.averageRating}{" "}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={openModalHandler}
            >
              Add Review
            </Button>
          </Box>
        </Box>
        {/* Reviews */}
        <div>
          <Typography
            variant="h5"
            color="primary"
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Reviews
          </Typography>
          {ratings.map((rating, index) => (
            <RatingCard key={index} rating={rating} />
          ))}
        </div>
      </Box>
    </>
  );
};
