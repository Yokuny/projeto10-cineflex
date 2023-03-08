import { useState } from "react";
import data from "./data/data.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
const RouteSwitch = () => {
  const [moviesData, setMoviesData] = useState([]);
  const getMoviesData = () => {
    data.getMovies().then((moviesData) => {
      setMoviesData(moviesData);
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage requireMovies={getMoviesData} movies={moviesData} />} />
        <Route path="/seats" element={<SeatsPage />} />
        <Route path="/session" element={<SessionsPage />} />
        <Route path="/succes" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
