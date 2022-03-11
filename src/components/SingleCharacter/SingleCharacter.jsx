export default function SingleCharacter({
  image,
  name,
  status,
  species,
  location,
}) {
  const colors = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  return (
    <div className=" text-white flex container mx-auto">
      <img
        className="inline rounded-l-xl h-72 min-w-[50%] object-cover"
        src={image}
        alt="avatar"
      />
      <div className="bg-gray-400 flex flex-col justify-evenly w-full rounded-r-xl text-left">
        <div className="ml-2">
          <h3 className="text-2xl font-bold hover:text-orange-450  hover:cursor-pointer">
            {name}
          </h3>
          <p>
            <span
              className={`w-2 h-2 rounded-xl ${colors[status]} inline-block mr-2`}
            ></span>
            {status} - {species}
          </p>
        </div>
        <div className="ml-2">
          <p>Last seen on:</p>
          <p className="hover:text-orange-450  hover:cursor-pointer">
            {location.name}
          </p>
        </div>
      </div>
    </div>
  );
}