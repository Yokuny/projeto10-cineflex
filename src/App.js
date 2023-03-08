import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavContainer from "./components/NavContainer";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

import data from "./data/data.js";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [movie, setMovie] = useState(null);
  const [hour, setHour] = useState(null);
  const getMoviesData = () => {
    data.getMovies().then((moviesData) => {
      setMoviesData(moviesData);
    });
  };
  return (
    <>
      <BrowserRouter>
        <NavContainer>CINEFLEX</NavContainer>
        <Routes>
          <Route
            path="/"
            element={<HomePage requireMovies={getMoviesData} catalog={moviesData} setMovie={setMovie} />}
          />
          <Route path="/sessoes/:movie" element={<SessionsPage movie={movie} setHour={setHour} />} />
          <Route path="/assentos/:hour" element={<SeatsPage hour={hour} />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;