import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { MailItem } from "../components/MailItem";

export const Trash = () => {
  const { trash } = useContext(MailContext);
  return (
    <>
      <h1>Trash {trash.length}</h1>
      {trash.map((mail) => (
        <MailItem key={mail.mId} mail={mail} />
      ))}
    </>
  );
};
