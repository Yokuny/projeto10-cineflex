import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, ListContainer, MovieContainer } from "../../components/HomeStyle";
export default function HomePage({ requireMovies, catalog, setMovie }) {
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
            id={movieData.id}
            key={movieData.id}
            onClick={() => {
              setMovie(movieData.id);
              selectMovie(movieData.id);
            }}>
            <img src={movieData.posterURL} alt="poster" />
          </MovieContainer>
        ))}
      </ListContainer>
    </PageContainer>
  );
}
