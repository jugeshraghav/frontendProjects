import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { MailItem } from "../components/MailItem";

export const Spam = () => {
  const { spam } = useContext(MailContext);

  return (
    <>
      <h1>Spam</h1>
      {spam.map((mail) => (
        <MailItem key={mail.mId} mail={mail} />
      ))}
    </>
  );
};
