export const initial_state = {
  habits: [],
  archive: [],
};

export const habitReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_HABIT":
      return { ...state, habits: [...state.habits, payload] };

    case "DELETE_HABIT":
      return {
        ...state,
        habits: state.habits.filter(
          ({ habit_id }) => habit_id != payload.habit_id
        ),
      };
    case "EDIT_HABIT":
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.habit_id === payload.habit_id ? { ...payload } : { ...habit }
        ),
      };
    case "ADD_TO_ARCHIVE":
      const updatedHabits = state.habits.filter(
        ({ habit_id }) => habit_id != payload.habit_id
      );
      return {
        ...state,
        habits: updatedHabits,
        archive: [...state.archive, payload],
      };
    case "UNARCHIVE_HABIT":
      const upadtedArchives = state.archive.filter(
        ({ habit_id }) => habit_id != payload.habit_id
      );
      return {
        ...state,
        habits: [...state.habits, payload],
        archive: upadtedArchives,
      };
    default:
      return state;
  }
};
