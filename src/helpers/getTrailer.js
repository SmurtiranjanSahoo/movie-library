import axios from "axios";

export const getTrailer = async (media_type, id) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((response) => {
      return response.data.results;
    });
};
