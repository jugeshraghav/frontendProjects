import { Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export const RatingCard = ({ rating }) => {
  // comment: "Good food but place is not that clean";
  // pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0";
  // rating: 3;
  // revName:
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid gray",
          paddingBottom: "10px",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* profile pic */}
          <img
            src={rating?.pp}
            alt={rating?.revName}
            width="50"
            height="50"
            style={{ borderRadius: "100%" }}
          />
          {/* name and comment */}
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {rating.revName}
            </Typography>
            <Typography variant="body2">{rating.comment}</Typography>
          </div>
        </Box>
        {/* rating */}
        <Button variant="contained">
          {rating.rating}
          <StarIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </Box>
    </>
  );
};
