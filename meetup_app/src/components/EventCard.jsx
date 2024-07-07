import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../utils/formatDateAndTime";

export const EventCard = ({ event }) => {
  const { id, title, eventStartTime, eventThumbnail, eventType } = event;

  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-60 h-72 shadow-lg bg-white p-2 cursor-pointer relative "
        onClick={() => navigate(`/event-details/${id}`)}
      >
        {/* image */}
        <div className="h-[70%]">
          <img src={eventThumbnail} alt={title} className="h-full" />
        </div>
        {/* event details */}
        <div className="h-[30%] flex flex-col justify-around">
          <p className="text-sm text-gray-400">
            {formatDateTime(eventStartTime)}
          </p>
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
        {/* event type tag */}
        <div className="absolute top-4 left-4 bg-white rounded-lg text-sm p-2">
          <h1>{eventType} Event</h1>
        </div>
      </div>
    </>
  );
};
