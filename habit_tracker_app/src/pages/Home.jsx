import { HabitCard } from "../components/Habit_card";
import { useHabitContext } from "../contexts/Habit_context";

export const Home = () => {
  const {
    state: { habits },
  } = useHabitContext();

  return (
    <>
      <button>Create New Habit</button>
      <div className="habits_container">
        {habits.length === 0 ? (
          <p> "No Habits Recorded yet! Create a New Habit" </p>
        ) : (
          habits.map((habit) => (
            <HabitCard key={habit.habit_id} habit={habit} />
          ))
        )}
      </div>
    </>
  );
};
