import { useTripAdvisorContext } from "../Contexts/TripAdvisorContext";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";

export const Continents = () => {
  const { data } = useTripAdvisorContext();
  const continents = data.continents;
  const navigate = useNavigate();
  const navigateToCountriesHandler = (continentId) => {
    navigate(`/${continentId}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* homepage header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontWeight: "bold",
              padding: "0",
              margin: "0",
            }}
          >
            Welcome to Trip Advisor
          </h2>
          <p style={{ color: "blue", fontSize: "15px" }}>
            Top Continents for your next holiday!
          </p>
        </div>

        {/* continents displayed */}
        <div
          style={{
            display: "flex",
            gap: "20px ",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "20px",
            position: "relative",
          }}
        >
          {continents?.map((continent) => (
            <Card
              key={continent.id}
              image={continent.image}
              name={continent.name}
              onClickHandler={() => navigateToCountriesHandler(continent.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
