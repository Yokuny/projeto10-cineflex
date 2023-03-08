import { useState, useEffect } from "react";
import {
  PageContainer,
  SessionContainer,
  ButtonsContainer,
  FooterContainer,
} from "../../components/SessionsStyle";
import data from "../../data/data.js";

function SessionsPage({ movie }) {
  const [title, setTitle] = useState([]);
  console.log("sessions");
  console.log(title);
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
            <SessionContainer key={about.id}>
              {about.weekday} - {about.date}
              <ButtonsContainer>
                {about.showtimes.map((hour) => {
                  return (
                    <button id={hour.id} key={`${hour.name} - ${hour.id}`}>
                      {hour.name}
                    </button>
                  );
                })}
              </ButtonsContainer>
            </SessionContainer>
          );
        })}
      </div>
      <FooterContainer>
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
