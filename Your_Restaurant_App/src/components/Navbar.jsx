import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Your Restaurant App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
