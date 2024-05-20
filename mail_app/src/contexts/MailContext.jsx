import { createContext, useState } from "react";
import { mails } from "../constants/data";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [allMails, setAllMails] = useState(mails);
  const [spam, setSpam] = useState([]);
  const [trash, setTrash] = useState([]);
  const [showStarred, setShowStarred] = useState(false);
  const [showUnread, setShowUnread] = useState(false);

  //handlers
  const addToSpam = (item) => {
    if (spam.find((mail) => mail.mId === item.mId)) {
      alert("already in spam");
      return;
    }
    setSpam([...spam, item]);
  };
  const addToTrash = (item) => {
    if (trash.find((mail) => mail.mId === item.mId)) {
      alert("already in trash");
      return;
    }
    setTrash([...trash, item]);
  };
  const toggleStarred = (id) => {
    setAllMails(
      allMails.map((mail) =>
        mail.mId == id ? { ...mail, isStarred: !mail.isStarred } : mail
      )
    );
  };
  const toggleUnread = (id) => {
    setAllMails(
      allMails.map((mail) =>
        mail.mId == id ? { ...mail, unread: !mail.unread } : mail
      )
    );
  };

  return (
    <MailContext.Provider
      value={{
        allMails,
        spam,
        trash,
        addToSpam,
        addToTrash,
        toggleStarred,
        toggleUnread,
        showStarred,
        setShowStarred,
        showUnread,
        setShowUnread,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};
