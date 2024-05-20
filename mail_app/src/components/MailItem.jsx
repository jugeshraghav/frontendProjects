import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { NavLink } from "react-router-dom";

export const MailItem = ({ mail }) => {
  const { spam, trash, addToSpam, addToTrash, toggleStarred, toggleUnread } =
    useContext(MailContext);
  const isMailInTrash = trash.find((trashMail) => trashMail.mId === mail.mId);
  const isMailInSpam = spam.find((spamMail) => spamMail.mId === mail.mId);
  return (
    <>
      <div key={mail.mId} className="mail-item">
        <div>
          <h5>Subject : {mail.subject}</h5>
          <button onClick={() => toggleStarred(mail.mId)}>
            {mail.isStarred ? "unstar" : "star"}
          </button>
        </div>

        <p>{mail.content}</p>
        <div>
          <div>
            <NavLink to={`/mail/${mail.mId}`}>View Details</NavLink>
          </div>
          <div>
            <button onClick={() => addToTrash(mail)}>
              {isMailInTrash ? "in Trash" : "Delete"}
            </button>
            <button onClick={() => toggleUnread(mail.mId)}>
              {mail.unread ? "Mark as Unread" : "already read"}
            </button>
            <button onClick={() => addToSpam(mail)}>
              {isMailInSpam ? "in Spam" : "Report Spam"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
