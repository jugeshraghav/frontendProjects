import { useHabitContext } from "../contexts/Habit_context";

export const Home = () => {
  const {
    state: { habits },
  } = useHabitContext();
  console.log(habits);
  return (
    <>
      <button>Create New Habit</button>
      <div className="habits_container">
        {habits.length === 0 ? (
          <p> "No Habits Recorded yet! Create a New Habit" </p>
        ) : (
          "habits"
        )}
      </div>
    </>
  );
};
