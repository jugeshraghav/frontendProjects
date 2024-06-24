import { useTripAdvisorContext } from "../Contexts/TripAdvisorContext";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
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
        {/* Back Button */}
        <div>
          <AiOutlineArrowLeft
            style={{
              //   display: "inline",
              width: "40px",
              height: "40px",
              position: "absolute",
              top: "80px",
              left: "10px",
              color: "white",
              backgroundColor: "blue",
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          />
        </div>
        {/* homepage header */}
        <div>
          <p style={{ color: "blue", fontSize: "15px" }}>
            Top Countries in {currentContinent.name}!
          </p>
        </div>

        {/* countries displayed */}
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
              onClickHandler={() =>
                navigateToDestinationsHandler(continentId, country.id)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
