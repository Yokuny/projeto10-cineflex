import axios from "axios";
const serverData = (() => {
  const getMovies = async () => {
    try {
      const res = await axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
      return res.data;
    } catch {
      return false;
    }
  };
  const getSession = async (id) => {
    try {
      const res = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
      return res.data;
    } catch {
      return false;
    }
  };
  const getSeats = async (id) => {
    try {
      const res = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
      return res.data;
    } catch {
      return false;
    }
  };
  const reserveSeat = async (obj) => {
    try {
      const res = await axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", obj);
      return res.status;
    } catch {
      return false;
    }
  };
  return { getMovies, getSession, getSeats, reserveSeat };
})();
export default serverData;
