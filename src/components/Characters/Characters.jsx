import AsyncList from "../../hoc/AsyncList/AsyncList";
import useCharacters from "./useCharacters";

function SingleCharacter({ image, name, status, species, location }) {
  return (
    <div className=" w-1/3 text-white flex">
      <img className="inline" src={image} alt="avatar" />
      <div className="bg-gray-400">
        <h3>{name}</h3>
        <p>
          {status} - {species}
        </p>
        <p>Last seen on</p>
        <p>{location.name}</p>
      </div>
    </div>
  );
}

export default function Characters() {
  const { characters, charactersStatus } = useCharacters();

  return (
    <div className="flex flex-wrap">
      <AsyncList status={charactersStatus}>
        {characters?.map((character) => (
          <SingleCharacter key={character.id} {...character} />
        ))}
      </AsyncList>
    </div>
  );
}
