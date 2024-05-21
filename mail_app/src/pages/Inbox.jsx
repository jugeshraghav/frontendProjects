import "../App.css";
import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { MailItem } from "../components/MailItem";
export const Inbox = () => {
  const { allMails, showUnread, showStarred } = useContext(MailContext);
  console.log(showStarred, showUnread);
  const starredMails = showStarred
    ? allMails.filter(({ isStarred }) => isStarred === true)
    : allMails;
  const filteredMails = showUnread
    ? starredMails.filter(({ unread }) => unread === true)
    : starredMails;
  return (
    <>
      <h1>Inbox</h1>
      {filteredMails.map((mail) => (
        <MailItem mail={mail} key={mail.mId} />
      ))}
    </>
  );
};
