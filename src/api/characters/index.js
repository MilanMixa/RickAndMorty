import axios from "../../axios/axiosInstance";

export const getCharacters = (page) => axios.get(`/character?page=${page}`);

export const getSingleCharacter = (id) => axios.get(`/character/${id}`);
