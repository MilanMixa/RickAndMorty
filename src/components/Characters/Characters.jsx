import AsyncList from "../../hoc/AsyncList/AsyncList";
import useCharacters from "./useCharacters";

function SingleCharacter({ image, name, status, species, location }) {
  const colors = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  return (
    <div className=" text-white flex my-4 mx-auto">
      <img className="inline  rounded-l-xl" src={image} alt="avatar" />
      <div className="bg-gray-400 flex flex-col justify-evenly w-44 rounded-r-xl text-left">
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

export default function Characters() {
  const { characters, charactersStatus, page } = useCharacters();
  console.log(page);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <AsyncList status={charactersStatus}>
          {characters?.map((character) => (
            <SingleCharacter key={character.id} {...character} />
          ))}
        </AsyncList>
      </div>
      <div className="inline-flex">
        <button
          disabled={page === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </div>
  );
}
