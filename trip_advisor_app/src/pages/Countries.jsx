import { useTripAdvisorContext } from "../Contexts/TripAdvisorContext";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/Card";

export const Countries = () => {
  const { continentId } = useParams();
  const { data } = useTripAdvisorContext();
  const currentContinent = data.continents.find(({ id }) => id == continentId);
  const countries = currentContinent?.countries;
  const navigate = useNavigate();
  const navigateToDestinationsHandler = (continentId, countryId) => {
    navigate(`/${continentId}/${countryId}`);
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
        <div>
          <p style={{ color: "blue", fontSize: "15px" }}>
            Top Contries in {currentContinent.name}!
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
          {countries?.map((country) => (
            <Card
              key={country.id}
              image={country.image}
              name={country.name}
              onClick={() =>
                navigateToDestinationsHandler(continentId, country.id)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
