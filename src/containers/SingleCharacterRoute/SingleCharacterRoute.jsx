import useSingleCharacterRoute from "./useSingleCharacterRoute";
import { useParams } from "react-router-dom";
import AsyncList from "../../hoc/AsyncList/AsyncList";

export default function SingleCharacterRoute() {
  const { id } = useParams();
  const { singleCharacter, singleCharacterStatus } =
    useSingleCharacterRoute(id);
  console.log(singleCharacter);

  // name, status, species, origin.name, location.name, image

  return (
    <AsyncList status={singleCharacterStatus}>
      {/* <div className="text-white">{singleCharacter && singleCharacter?.name}</div> */}

      {/* <div>{singleCharacter?.name}</div>
        <div>{singleCharacter?.status}</div>
        <div>{singleCharacter?.species}</div>
        <div>{singleCharacter?.origin.name}</div>
        <div>{singleCharacter?.location.name}</div>
        <img src={singleCharacter?.image} alt="image" /> */}
      <div className="text-white bg-yellow-500 flex">
        <div className="w-1/3">
          <img
            className="rounded-2xl"
            src={singleCharacter?.image}
            alt="avatar"
          />
          <h3 className="bg-gray-500 rounded-xl py-3 text-center">
            Name: {singleCharacter?.name}
          </h3>
        </div>
        {/* mozda mora u jedan parent div */}
        <div className="">
          <div className="bg-gray-500 rounded-xl py-3 text-center my-2">
            <p>Status: {singleCharacter?.status}</p>
          </div>
          <div className="bg-gray-500 rounded-xl py-3 text-center">
            <p>Species: {singleCharacter?.species}</p>
          </div>
          <div className="bg-gray-500 rounded-xl py-3 text-center my-2">
            <p>Origin: {singleCharacter?.origin.name}</p>
          </div>
          <div className="bg-gray-500 rounded-xl py-3 text-center">
            <p>Location: {singleCharacter?.location.name}</p>
          </div>
        </div>
      </div>
    </AsyncList>
  );
}
