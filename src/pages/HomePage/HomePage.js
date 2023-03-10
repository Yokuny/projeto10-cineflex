import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, ListContainer, MovieContainer } from "./HomeStyle";
function HomePage({ requireMovies, catalog, setMovie }) {
  useEffect(() => requireMovies(), []);
  const navigate = useNavigate();
  const selectMovie = (id) => {
    navigate(`/sessoes/${id}`);
  };
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {catalog.map((movieData) => (
          <MovieContainer
            key={movieData.id}
            id={movieData.id}
            onClick={() => {
              setMovie(movieData.id);
              selectMovie(movieData.id);
            }}
            data-test="movie">
            <img src={movieData.posterURL} alt="poster" />
          </MovieContainer>
        ))}
      </ListContainer>
    </PageContainer>
  );
}
export default HomePage;