import { GoLocation } from "react-icons/go";

export const Card = ({ image, name, onClickHandler }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        cursor: "pointer",
        borderRadius: "20px",
        position: "relative",
      }}
      onClick={onClickHandler}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
      />
      <p
        style={{
          position: "absolute",
          bottom: "0",
          color: "white",
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          margin: "15px",
        }}
      >
        <GoLocation />
        {name}
      </p>
    </div>
  );
};
