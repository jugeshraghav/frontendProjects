import {
  Box,
  Button,
  Fade,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRestaurantContext } from "../contexts/RestaurantContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};
export const ReviewModal = ({
  isModalOpen,
  closeModalHandler,
  restaurantId,
}) => {
  const [rating, setRating] = useState(1);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  //context
  const { addReviewHandler } = useRestaurantContext();

  //handlers
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ratingHandler = (e) => {
    setRating(e.target.value);
  };
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const review = {
      revName: name,
      rating,
      comment,
      pp: "https://img.freepik.com/free-vector/hand-drawn-pop-art-girl-illustration_23-2149509671.jpg?t=st=1719132719~exp=1719136319~hmac=c7a3fb5198bb9c175cd92a800d9ccdc2bedb1267c57e8fc8925d4a4c5602462c&w=740",
    };
    addReviewHandler(review, restaurantId);

    // close the modal after adding review
    closeModalHandler();
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={closeModalHandler}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style} component="form" onSubmit={submitHandler}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              color="primary"
            >
              Add Review
            </Typography>
            <TextField
              variant="outlined"
              label="Name"
              required
              fullWidth
              onChange={nameHandler}
            />
            <TextField
              variant="outlined"
              select
              label="select rating"
              required
              fullWidth
              onChange={ratingHandler}
              defaultValue={rating}
            >
              <MenuItem value={1}>{1}</MenuItem>
              <MenuItem value={2}>{2}</MenuItem>
              <MenuItem value={3}>{3}</MenuItem>
              <MenuItem value={4}>{4}</MenuItem>
              <MenuItem value={5}>{5}</MenuItem>
            </TextField>
            <TextField
              multiline
              maxRows="2"
              label="comment"
              fullWidth
              onChange={commentHandler}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
