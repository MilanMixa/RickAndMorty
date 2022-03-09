import { useQuery } from "react-query";
import axios from "../../axios/axiosInstance";

export default function useCharacters() {
  const fetchCharacters = async () => {
    const { data } = await axios.get("/character");
    return data.results;
  };

  const { data: characters, status: charactersStatus } = useQuery(
    "characters",
    fetchCharacters
  );

  return {
    characters,
    charactersStatus,
  };
}
