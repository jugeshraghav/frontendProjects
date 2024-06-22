import { useHabitContext } from "../contexts/Habit_context";
import { useLocation } from "react-router-dom";

export const HabitCard = ({ habit }) => {
  const { dispatch } = useHabitContext();
  const { pathname } = useLocation();
  const archiveHandler = () => {
    pathname === "/"
      ? dispatch({ type: "ADD_TO_ARCHIVE", payload: habit })
      : dispatch({ type: "UNARCHIVE_HABIT", payload: habit });
  };
  return (
    <>
      <div>
        <h5>{habit.habit}</h5>
        <div>
          <button>Edit</button>
          <button onClick={archiveHandler}>
            {pathname === "/" ? "Archive" : "Unarchive"}
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_HABIT", payload: habit })}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
