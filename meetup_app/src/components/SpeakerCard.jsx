export const SpeakerCard = ({ speaker }) => {
  const { name, image, designation } = speaker;
  return (
    <>
      <div className="w-36 md:w-40 h-40  shadow-lg bg-white p-2 cursor-pointer relative flex flex-col justify-center items-center">
        <img src={image} alt={name} className="rounded-full w-20 h-20" />
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>
    </>
  );
};
