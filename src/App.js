import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data/data.js";

import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { NavContainer } from "./components/NavContainer";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [selected, setSelected] = useState(null);
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
            element={<HomePage requireMovies={getMoviesData} movies={moviesData} selection={setSelected} />}
          />
          <Route path="/sessoes/:selected" element={<SessionsPage selection={selected} />} />
          <Route path="/assentos" element={<SeatsPage />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;