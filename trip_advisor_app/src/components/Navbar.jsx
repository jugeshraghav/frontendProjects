import { AppBar, Toolbar, Typography } from "@mui/material";
export const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "darkblue", color: "white" }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white",
              margin: "auto",
            }}
          >
            Trip Destination App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
