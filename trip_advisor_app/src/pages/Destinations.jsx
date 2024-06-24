import { useTripAdvisorContext } from "../Contexts/TripAdvisorContext";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
export const Destinations = () => {
  const { continentId, countryId } = useParams();
  const { data } = useTripAdvisorContext();
  const currentContinent = data.continents.find(({ id }) => id == continentId);
  const currentCountry = currentContinent?.countries?.find(
    ({ id }) => id == countryId
  );
  const destinations = currentCountry.destinations;
  const navigate = useNavigate();
  const navigateToDestinationDetailsHandler = (
    continentId,
    countryId,
    destiantionId
  ) => {
    navigate(`/${continentId}/${countryId}/${destiantionId}`);
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
            Top Destinations in {currentCountry.name}!
          </p>
        </div>

        {/* destinations displayed */}
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
          {destinations?.map((destination) => (
            <Card
              key={destination.id}
              image={destination.image}
              name={destination.name}
              onClickHandler={() =>
                navigateToDestinationDetailsHandler(
                  continentId,
                  countryId,
                  destination.id
                )
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
