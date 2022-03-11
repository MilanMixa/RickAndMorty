import { useState } from "react";
import { useQuery } from "react-query";
import { getCharacters as getCharactersAPI } from "../../api/characters";

export default function useCharacters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const { data } = await getCharactersAPI(queryKey[1]);

    return data;
  };

  const { data: response, status: charactersStatus } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  const characters = response?.results || [];
  const info = response?.info || {};

  return {
    info,
    characters,
    charactersStatus,
    page,
    setPage,
  };
}
