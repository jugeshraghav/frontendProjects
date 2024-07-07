import { useTripAdvisorContext } from "../Contexts/TripAdvisorContext";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
export const DestinationDetails = () => {
  const navigate = useNavigate();
  const { continentId, countryId, destinationId } = useParams();
  const { data } = useTripAdvisorContext();
  const currentContinent = data.continents.find(({ id }) => id == continentId);
  const currentCountry = currentContinent?.countries?.find(
    ({ id }) => id == countryId
  );
  const currentDestination = currentCountry.destinations.find(
    ({ id }) => id == destinationId
  );

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
        {/* Destination header */}
        <div>
          <p style={{ color: "blue", fontSize: "30px" }}>
            {currentDestination.name}!
          </p>
        </div>

        {/* destination details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src={currentDestination?.image}
            alt={currentDestination?.name}
            style={{
              width: "350px",
              height: "350px",
            }}
          />
          <div style={{ fontSize: "15px", maxWidth: "400px" }}>
            <p>
              <span style={{ color: "blue" }}>Name : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.name}
              </span>
            </p>
            <p>
              <span style={{ color: "blue" }}>Description : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.description}
              </span>
            </p>
            <p>
              <span style={{ color: "blue" }}>Rating : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.rating}
              </span>
            </p>
            <p>
              <span style={{ color: "blue" }}>Reviews : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.reviews}
              </span>
            </p>
            <p>
              <span style={{ color: "blue" }}>Lcoation : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.location}
              </span>
            </p>
            <p>
              <span style={{ color: "blue" }}>Opening Hours : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.openingHours}
              </span>
            </p>
            <p>
              <span style={{ color: "blue" }}>Ticket Price : </span>{" "}
              <span style={{ color: "white" }}>
                {" "}
                {currentDestination?.ticketPrice}
              </span>
            </p>
            <p>
              <a
                style={{ color: "blue", cursor: "pointer" }}
                href={currentDestination?.website}
              >
                Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
