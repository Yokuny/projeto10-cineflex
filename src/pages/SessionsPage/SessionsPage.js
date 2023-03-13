import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PageContainer, SessionContainer, ButtonsContainer, FooterContainer } from "./SessionsStyle";
import data from "../../data/data.js";

function SessionsPage() {
  const [title, setTitle] = useState([]);
  const { movie } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    data.getSession(movie).then((data) => {
      setTitle(data);
    });
  }, []);
  if (title.length === 0) return <div>Carregando...</div>;
  return (
    <PageContainer>
      Selecione o horário
      <div>
        {title.days.map((about) => {
          return (
            <SessionContainer key={about.id} data-test="movie-day">
              {about.weekday} - {about.date}
              <ButtonsContainer>
                {about.showtimes.map((hour) => {
                  return (
                    <button
                      id={hour.id}
                      key={`${hour.name}-${hour.id}`}
                      onClick={() => {
                        navigate(`/assentos/${hour.id}`);
                      }}
                      test="showtime">
                      {hour.name}
                    </button>
                  );
                })}
              </ButtonsContainer>
            </SessionContainer>
          );
        })}
      </div>
      <FooterContainer data-test="footer">
        <div>
          <img src={title.posterURL} alt="poster" />
        </div>
        <div>
          <p>{title.title}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}
export default SessionsPage;
