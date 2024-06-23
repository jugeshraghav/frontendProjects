import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";

export const FoodCard = ({ foodItem }) => {
  return (
    <>
      <Card
        sx={{
          "@media (max-width: 600px)": {
            width: "300px",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            sx={{ width: "100%" }}
            image={foodItem.imgSrc}
            alt={foodItem.name}
          />
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {foodItem.name}
            </Typography>
            <Typography variant="body2">Price : Rs {foodItem.price}</Typography>
            <Typography variant="body2">Qty : {foodItem.qty}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
