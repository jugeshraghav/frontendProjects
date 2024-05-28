import { createContext, useContext, useReducer } from "react";
import { habitReducer, initial_state } from "../reducers/habitReducer";

const HabitContext = createContext();

export const useHabitContext = () => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error("use context inside HabitContext Provider. ");
  }
  return context;
};

export const HabitContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, initial_state);
  return (
    <HabitContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};
