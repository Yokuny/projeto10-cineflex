import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, ListContainer, MovieContainer } from "./HomeStyle";
function HomePage({ requireMovies, catalog, backBtn }) {
  useEffect(() => requireMovies(), []);
  const navigate = useNavigate();
  backBtn(false);
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
              backBtn(true);
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