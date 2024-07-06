import { createContext, useContext, useState } from "react";
import { Data } from "../constants/data";

const MeetupContext = createContext();

export const MeetupContextProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState(Data.meetups);
  return (
    <MeetupContext.Provider value={{ allEvents }}>
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetupContext = () => {
  const context = useContext(MeetupContext);
  if (!context) throw new Error("can't access data outside the context!");
  return context;
};
