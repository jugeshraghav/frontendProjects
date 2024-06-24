import { createContext, useState, useContext } from "react";
import { appData } from "../constants/data";
const TripAdvisorContext = createContext();

export const TripAdvisorContextProvider = ({ children }) => {
  const [data, setData] = useState(appData);
  return (
    <TripAdvisorContext.Provider value={{ data }}>
      {children}
    </TripAdvisorContext.Provider>
  );
};

export const useTripAdvisorContext = () => {
  const context = useContext(TripAdvisorContext);
  if (!context) throw new Error("context not found!");
  return context;
};
