import { HabitCard } from "../components/Habit_card";
import { useHabitContext } from "../contexts/Habit_context";

export const Archive = () => {
  const {
    state: { archive },
  } = useHabitContext();
  return (
    <>
      <div className="habits_container">
        {archive.length === 0 ? (
          <p> "No Habits Archived." </p>
        ) : (
          archive.map((habit) => (
            <HabitCard key={habit.habit_id} habit={habit} />
          ))
        )}
      </div>
    </>
  );
};
