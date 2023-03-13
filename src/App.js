import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import NavContainer from "./components/NavContainer";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

import data from "./data/data.js";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [final, setFinal] = useState([]);
  const [backBtn, setBackBtn] = useState(false);
  const getMoviesData = () => {
    data.getMovies().then((moviesData) => {
      setMoviesData(moviesData);
    });
  };
  return (
    <>
      <BrowserRouter>
        <NavContainer btnCondition={backBtn}>CINEFLEX</NavContainer>
        <Routes>
          <Route
            path="/"
            element={<HomePage requireMovies={getMoviesData} catalog={moviesData} backBtn={setBackBtn} />}
          />
          <Route path="/sessoes/:movie" element={<SessionsPage />} backBtn={setBackBtn} />
          <Route path="/assentos/:hour" element={<SeatsPage final={setFinal} backBtn={setBackBtn} />} />
          <Route path="/sucesso" element={<SuccessPage user={final} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;