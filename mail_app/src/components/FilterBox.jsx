import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";

export const FilterBox = () => {
  const { showStarred, showUnread, setShowUnread, setShowStarred } =
    useContext(MailContext);
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showStarred}
            onChange={() => setShowStarred(!showStarred)}
          />
          Show Unread
        </label>
        <label>
          <input
            type="checkbox"
            checked={showUnread}
            onChange={() => setShowUnread(!showUnread)}
          />
          Show starred
        </label>
      </div>
    </>
  );
};
