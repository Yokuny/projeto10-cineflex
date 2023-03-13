import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, ListContainer, MovieContainer } from "./HomeStyle";
function HomePage({ requireMovies, catalog }) {
  useEffect(() => requireMovies(), []);
  const navigate = useNavigate();
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {catalog.map((movieData) => (
          <MovieContainer
            key={movieData.id}
            id={movieData.id}
            onClick={() => {
              navigate(`/sessoes/${movieData.id}`);
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