import AsyncList from "../../hoc/AsyncList/AsyncList";
import useCharacters from "./useCharacters";

function SingleCharacter({ image, name, status, species, location }) {
  return (
    <div className=" text-white flex justify-center my-2 mx-5 ">
      <img className="inline w-60 rounded-l-xl" src={image} alt="avatar" />
      <div className="bg-gray-400 flex flex-col justify-evenly w-44 rounded-r-xl text-left">
        <div className="ml-2">
          <h3 className="text-2xl ">{name}</h3>
          <p>
            <span
              className={`w-2 h-2 rounded-xl ${
                status === "Alive"
                  ? "bg-green-500"
                  : status === "Dead"
                  ? " bg-red-500"
                  : "bg-gray-500"
              } inline-block mr-2`}
            ></span>
            {status} - {species}
          </p>
        </div>
        <div className="ml-2">
          <p>Last seen on</p>
          <p>{location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default function Characters() {
  const { characters, charactersStatus } = useCharacters();

  return (
    <div className="flex flex-wrap justify-center">
      <AsyncList status={charactersStatus}>
        {characters?.map((character) => (
          <SingleCharacter key={character.id} {...character} />
        ))}
      </AsyncList>
    </div>
  );
}
