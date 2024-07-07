import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Data } from "../constants/data";
import { initial_state, meetup_reducer } from "../reducers/meetup_reducer";

const MeetupContext = createContext();

export const MeetupContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(meetup_reducer, initial_state);

  const { allEvents, searchText, eventTypeSelected } = state;

  return (
    <MeetupContext.Provider
      value={{ allEvents, dispatch, searchText, eventTypeSelected }}
    >
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetupContext = () => {
  const context = useContext(MeetupContext);
  if (!context) throw new Error("can't access data outside the context!");
  return context;
};
