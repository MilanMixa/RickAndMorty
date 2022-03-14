import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCharacter } from "../../api/characters";

export default function SingleCharacterRoute() {
  const [data, setData] = useState({});
  console.log(data);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchSingleCharacter = async (id) => {
      try {
        const { data } = await getSingleCharacter(id);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSingleCharacter(id);
  }, [id]);

  return <div className="text-white">{data.name}</div>;
}
