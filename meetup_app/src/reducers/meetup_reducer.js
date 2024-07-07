import { Data } from "../constants/data";

export const initial_state = {
  allEvents: Data.meetups,
  searchText: "",
  eventTypeSelected: "both",
};

export const meetup_reducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: payload };
    case "SET_EVENT_TYPE":
      return { ...state, eventTypeSelected: payload };
    case "default":
      return state;
  }
};
