export const Filters = () => {
  return (
    <>
      <div className="border-2 border-rose-500 p-4 m-4 text-sm flex justify-between items-center">
        <input
          type="text"
          placeholder="search for events"
          className="p-2 text-gray-500 w-[30vw]"
        />
        <select defaultValue={""} className="p-2 text-gray-500 w-[10vw]">
          <option value="" disabled>
            Event Type
          </option>
          <option value="both">Both</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
    </>
  );
};
