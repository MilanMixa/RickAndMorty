import useSingleCharacterRoute from "./useSingleCharacterRoute";
import { useParams } from "react-router-dom";
import AsyncList from "../../hoc/AsyncList/AsyncList";

export default function SingleCharacterRoute() {
  const { id } = useParams();
  const { singleCharacter, singleCharacterStatus } =
    useSingleCharacterRoute(id);

  return (
    <AsyncList status={singleCharacterStatus}>
      {/* <div className="text-white">{singleCharacter && singleCharacter?.name}</div> */}
      <div className="text-white">{singleCharacter?.name}</div>
    </AsyncList>
  );
}
