// COMPONENTS:
import AsyncList from "../../hoc/AsyncList/AsyncList";
import Pagination from "../../components/Pagination/Pagination";
import SingleCharacter from "../../components/SingleCharacter/SingleCharacter";

// LOGIC:
import useCharacters from "./useCharacters";

export default function Characters() {
  const { characters, charactersStatus, page } = useCharacters();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9">
        <AsyncList status={charactersStatus}>
          {characters?.map((character) => (
            <SingleCharacter key={character.id} {...character} />
          ))}
        </AsyncList>
      </div>
      <Pagination page={page} />
    </div>
  );
}
