import { AppBar, Toolbar, Typography } from "@mui/material";
export const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "white", textAlign: "center" }}
          >
            Trip Destination App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
