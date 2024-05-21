import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";

export const FilterBox = () => {
  const { showStarred, showUnread, setShowUnread, setShowStarred } =
    useContext(MailContext);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          display: "flex",
          gap: "30px",
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={showUnread}
            onChange={() => setShowUnread(!showUnread)}
          />
          Show Unread
        </label>
        <label>
          <input
            type="checkbox"
            checked={showStarred}
            onChange={() => setShowStarred(!showStarred)}
          />
          Show starred
        </label>
      </div>
    </>
  );
};
