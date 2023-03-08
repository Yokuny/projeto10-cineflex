import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, ListContainer, MovieContainer } from "../../components/HomeStyle";
export default function HomePage({ requireMovies, movies, selection }) {
  useEffect(() => requireMovies(), []);
  const navigate = useNavigate();
  const selectMovie = (id) => {
    navigate(`/sessoes/${id}`);
  };
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((movie) => (
          <MovieContainer
            id={movie.id}
            key={movie.id}
            onClick={() => {
              selection(movie.id);
              selectMovie(movie.id);
            }}>
            <img src={movie.posterURL} alt="poster" />
          </MovieContainer>
        ))}
      </ListContainer>
    </PageContainer>
  );
}
