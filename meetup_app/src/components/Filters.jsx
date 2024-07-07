import { useMeetupContext } from "../contexts/MeetupContext";

export const Filters = () => {
  const { dispatch } = useMeetupContext();

  //handlers
  const inputHandler = (e) => {
    if (e.target.name === "input") {
      dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value });
    } else {
      dispatch({ type: "SET_EVENT_TYPE", payload: e.target.value });
    }
  };
  return (
    <>
      <div className="border-2 border-rose-500 p-4 m-4 text-sm flex justify-between items-center">
        <input
          type="text"
          placeholder="search for events"
          className="p-2 text-gray-500 min-w-[30vw]"
          name="input"
          onChange={inputHandler}
        />
        <select
          defaultValue={""}
          className="p-2 text-gray-500 min-w-[10vw]"
          name="select"
          onChange={inputHandler}
        >
          <option value="" disabled>
            Event Type
          </option>
          <option value="both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
    </>
  );
};
