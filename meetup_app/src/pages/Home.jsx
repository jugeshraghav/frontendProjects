import { EventCard } from "../components/EventCard";
import { Filters } from "../components/Filters";
import { useMeetupContext } from "../contexts/MeetupContext";

export const Home = () => {
  const { allEvents } = useMeetupContext();
  return (
    <>
      {/* filters */}
      <div className="bg-green-300 h-[10vh]">
        <Filters />
      </div>

      {/* Meetup cards */}
      <div className="bg-blue-500 min-h-[100vh] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {allEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};
