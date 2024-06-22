import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
export const FoodCard = ({ foodItem }) => {
  return (
    // name: "Pepperoni Pizza",
    //     imgSrc:
    //       "https://b.zmtcdn.com/data/dish_photos/6c9/c89a5e86eece9f96e3b8be3f6bb2c6c9.jpg?output-format=webp",
    //     price: 400,
    //     qty:
    <>
      <Card sx={{ width: "150px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
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
