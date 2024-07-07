import { FaRupeeSign } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useMeetupContext } from "../contexts/MeetupContext";
import { SpeakerCard } from "../components/SpeakerCard";

export const EventDetails = () => {
  const { eventId } = useParams();
  const { allEvents } = useMeetupContext();
  const currentEvent = allEvents?.find((event) => event.id === eventId);
  const {
    title,
    eventStartTime,
    eventEndTime,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation: { dressCode, ageRestrictions },
  } = currentEvent;
  const updatedEventStartTime = new Date(eventStartTime)
    .toLocaleString()
    .toUpperCase();
  const updatedEventEndTime = new Date(eventEndTime)
    .toLocaleString()
    .toUpperCase();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 px-6">
        {/* section 1 */}
        {/* back arrow */}
        <div
          className="bg-rose-500 text-white font-bold w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack className=" w-6 h-6 " />
        </div>

        {/* section 2 */}
        {/* event details */}
        <div className="md:w-[50vw] flex flex-col gap-8">
          {/* header */}
          <div>
            <h1 className="font-bold text-2xl">{title}</h1>
            <p>
              <span className="font-bold">Hosted By: </span>
              {hostedBy}
            </p>
          </div>
          {/* image */}
          <img src={eventThumbnail} alt={title} className="w-full h-[40%]" />
          {/* description */}
          <div>
            <h1 className="font-bold">Details</h1>
            <p className="text-sm">{eventDescription}</p>
          </div>
          {/* additional info */}
          <div>
            <h1 className="text-2xl font-bold">Additional Information</h1>
            <p>
              <span className="font-bold">Dress Code : </span>
              <span>{dressCode}</span>
            </p>
            <p>
              <span className="font-bold">Age Restrictions : </span>
              <span>{ageRestrictions}</span>
            </p>
          </div>
          {/* tags */}
          <div>
            <h1 className="font-bold">Event Tags </h1>
            {eventTags.map((tag) => (
              <p
                key={tag}
                className="bg-rose-600 text-white inline mr-2 p-1 rounded-lg text-sm"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* section 3 */}
        {/* speakers and address card */}
        <div>
          {/* address */}
          <div className="text-sm w-80 md:w-90 shadow-lg p-4 bg-white flex flex-col gap-4 mb-8">
            <div className="flex gap-2 items-center">
              <span>
                <AiOutlineClockCircle />
              </span>
              <span>
                {updatedEventStartTime} to {updatedEventEndTime}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <CiLocationOn />
              </span>
              <span>{address ? address : "Not Mentioned"}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <FaRupeeSign />
              </span>
              <span> {price}</span>
            </div>
          </div>
          {/* speakers */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Speakers </h1>
            <div className="flex gap-6 ">
              {speakers.map((speaker) => (
                <SpeakerCard speaker={speaker} key={speaker.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
