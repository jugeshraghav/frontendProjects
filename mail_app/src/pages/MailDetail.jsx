import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MailContext } from "../contexts/MailContext";
import { MailItem } from "../components/MailItem";

export const MailDetail = () => {
  const { mailId } = useParams();
  const { allMails } = useContext(MailContext);
  const currentMail = allMails.find((mail) => mail.mId === mailId);
  return (
    <>
      <h4>Mail Detail</h4>
      <MailItem mail={currentMail} />
    </>
  );
};
