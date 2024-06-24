import { useTripAdvisorContext } from "../Contexts/TripAdvisorContext";
import { Card, CardMedia, Grid, Container, Typography } from "@mui/material";

export const Continents = () => {
  const { data } = useTripAdvisorContext();
  const continents = data.continents;

  return (
    <>
      <Container
        sx={{
          backgroundColor: "yellow",
          display: "flex",
          gap: "10px ",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4">Welcome to Trip Advisor</Typography>
        <Typography variant="h4">
          Top Continents for your next holiday!
        </Typography>
        {continents?.map((continent) => (
          <Card key={continent.id} sx={{ width: "200px" }}>
            <CardMedia
              component="img"
              height="200"
              sx={{ width: "200px" }}
              image={continent.image}
              alt={continent.name}
            />
          </Card>
        ))}
      </Container>
    </>
  );
};
