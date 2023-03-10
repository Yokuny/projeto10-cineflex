import axios from "axios";

const serverData = (() => {
  const url = "https://mock-api.driven.com.br/api/v8/cineflex";
  function errorLog(func) {
    console.log(`Erro no ${func}`);
    return false;
  }
  const getMovies = async () => {
    try {
      const res = await axios.get(`${url}/movies`);
      return res.data;
    } catch {
      errorLog("getMovies");
    }
  };
  const getSession = async (id) => {
    try {
      const res = await axios.get(`${url}/movies/${id}/showtimes`);
      return res.data;
    } catch {
      errorLog("getSession");
    }
  };
  const getSeats = async (id) => {
    try {
      const res = await axios.get(`${url}/showtimes/${id}/seats`);
      return res.data;
    } catch {
      errorLog("getSeats");
    }
  };
  const reserveSeat = async (obj) => {
    try {
      const res = await axios.post(`${url}/seats/book-many`, obj);
      return res;
    } catch {
      errorLog("reserveSeat");
    }
  };
  return { getMovies, getSession, getSeats, reserveSeat };
})();
export default serverData;