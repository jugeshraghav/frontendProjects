import "../App.css";
import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { MailItem } from "../components/MailItem";
export const Inbox = () => {
  const { allMails, showUnread, showStarred } = useContext(MailContext);

  return (
    <>
      <h1>Inbox</h1>
      {allMails.map((mail) => (
        <MailItem mail={mail} key={mail.mId} />
      ))}
    </>
  );
};
