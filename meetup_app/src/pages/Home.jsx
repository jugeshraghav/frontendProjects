import { EventCard } from "../components/EventCard";
import { Filters } from "../components/Filters";
import { useMeetupContext } from "../contexts/MeetupContext";

export const Home = () => {
  const { allEvents } = useMeetupContext();
  return (
    <>
      {/* filters */}
      <div className=" h-[10vh] ">
        <Filters />
      </div>

      {/* Meetup cards */}
      <div className=" min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-10 justify-items-center">
        {allEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};
