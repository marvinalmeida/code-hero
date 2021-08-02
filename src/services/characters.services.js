import api, { TS, HASH, REACT_APP_API_KEY } from "./api";

export const getAllCharacters = ({limit, offset}) => {
  return api.get(`/characters?limit=${limit}&offset=${offset}ts=${TS}&apikey=${REACT_APP_API_KEY}&hash=${HASH}`);
};

export const getCharactersById = (id) => {
  return api.get(
    `/characters/${id}?ts=${TS}&apikey=${REACT_APP_API_KEY}&hash=${HASH}`
  );
};

export const getCharactersBySearch = (name) => {
  return api.get(
    `/characters?name=${name}&apikey=${REACT_APP_API_KEY}`
  );
};
