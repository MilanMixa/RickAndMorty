import { useState } from "react";
import { useQuery } from "react-query";
import axios from "../../axios/axiosInstance";

export default function useCharacters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const { data } = await axios.get(`/character?page=${queryKey[1]}`);
    return data.results;
  };

  const { data: characters, status: charactersStatus } = useQuery(
    ["characters", page],
    fetchCharacters
  );

  return {
    characters,
    charactersStatus,
    page,
  };
}
