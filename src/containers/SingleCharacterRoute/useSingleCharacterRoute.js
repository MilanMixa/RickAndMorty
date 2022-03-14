// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleCharacter } from "../../api/characters";

export default function useSingleCharacterRoute(id) {
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     const fetchSingleCharacter = async (id) => {
  //       try {
  //         const { data } = await getSingleCharacter(id);
  //         setData(data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     fetchSingleCharacter(id);
  //   }, [id]);

  const fetchSingleCharacter = async () => {
    const { data } = await getSingleCharacter(id);

    return data;
  };

  const { data: singleCharacter, status: singleCharacterStatus } = useQuery(
    ["single-character", id],
    fetchSingleCharacter
  );

  return {
    singleCharacter,
    singleCharacterStatus,
  };
}
