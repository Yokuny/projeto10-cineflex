import axios from "axios";

const serverData = (() => {
  function errorLog(func) {
    console.log(`Erro no ${func}`);
    return false;
  }
  const getMovies = async () => {
    try {
      const res = await axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
      return res.data;
    } catch {
      errorLog("getMovies");
    }
  };
  const getSession = async (id) => {
    try {
      const res = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
      return res.data;
    } catch {
      errorLog("getSession");
    }
  };
  const getSeats = async (id) => {
    try {
      const res = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
      return res.data;
    } catch {
      errorLog("getSeats");
    }
  };
  const reserveSeat = async (obj) => {
    try {
      const res = await axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", obj);
      return res.status;
    } catch {
      errorLog("reserveSeat");
    }
  };
  return { getMovies, getSession, getSeats, reserveSeat };
})();
export default serverData;