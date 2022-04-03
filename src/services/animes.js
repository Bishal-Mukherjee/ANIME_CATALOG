import axios from "axios";

export const fetchAllAnimes = async () => {
  const response = await axios({
    method: "GET",
    url: "https://ghibliapi.herokuapp.com/films",
  });

  return response;
};

export const getAnimeById = async (animeId) => {
  const response = await axios({
    method: "GET",
    url: `https://ghibliapi.herokuapp.com/films/${animeId}`,
  });

  return response;
};

export const getPeopleDetails = async (characterUrl) => {
  const response = await axios({
    method: "GET",
    url: characterUrl,
  });

  return response;
};
