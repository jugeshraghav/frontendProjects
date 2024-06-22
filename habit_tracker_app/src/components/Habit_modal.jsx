import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useHabitContext } from "../contexts/Habit_context";

export const Habit_Modal = () => {
  const [habit, setHabit] = useState("");
  const [goal, setGoal] = useState("Daily");
  const [repeat, setRepeat] = useState(0);
  const [startDate, setStartDate] = useState("");
  const newHabit = {
    habit_id: uuid(),
    habit,
    goal,
    repeat,
    startDate,
  };

  const { dispatch } = useHabitContext();
  const addHabitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_HABIT", payload: newHabit });
    setHabit("");
    setGoal("Daily");
    setRepeat(0);
    setStartDate("");
  };

  return (
    <>
      <form>
        <h5>Habit</h5>
        <label>
          Name of habit
          <input
            type="text"
            placeholder="Enter Habit name"
            onChange={(e) => setHabit(e.target.value)}
            value={habit}
          />
        </label>
        <label>
          Goal
          <select onChange={(e) => setGoal(e.target.value)} value={goal}>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </label>
        <label>
          How many times you want to repeat it?
          <input
            type="number"
            placeholder="Enter Habit name"
            onChange={(e) => setRepeat(e.target.value)}
            value={repeat}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            placeholder="Enter Habit name"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </label>
        <button onClick={(e) => addHabitHandler(e)}>Create</button>
      </form>
    </>
  );
};
