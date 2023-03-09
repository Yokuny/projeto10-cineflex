import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.js";
import SeatsInfo from "./SeatsInfo.js";
import { PageContainer, SeatsContainer, SeatItem, FormContainer, FooterContainer } from "./SeatsStyle.js";
const mark = [
  { color: "#C3CFD9", border: "#7B8B99" },
  { color: "#FBE192", border: "#F7C52B" },
  { color: "#1AAE9E", border: "#0E7D71" },
];

function SeatsPage({ id }) {
  const [hour, setHour] = useState("");
  const [movie, setMovie] = useState({});
  const [day, setDay] = useState({});
  const [seats, setSeats] = useState([]);

  const makeSelection = (id) => {
    const newSeats = seats.map((selection) => {
      if (selection.id === id) {
        return { ...selection, selected: !selection.selected };
      }
      return selection;
    });
    setSeats(newSeats);
  };

  useEffect(() => {
    data.getSeats(id).then((data) => {
      setHour(data.name);
      setDay(data.day);
      setMovie(data.movie);
      setSeats(
        data.seats.map(({ id, name, isAvailable }) => {
          return { id, name, isAvailable, selected: false };
        })
      );
    });
  }, []);

  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seats.map((seat) => {
          return (
            <SeatItem
              key={seat.id}
              disabled={!seat.isAvailable}
              color={seat.selected ? mark[2].color : mark[0].color}
              border={seat.selected ? mark[2].border : mark[0].border}
              onClick={() => makeSelection(seat.id)}>
              {seat.name}
            </SeatItem>
          );
        })}
      </SeatsContainer>
      <SeatsInfo colors={mark} />
      <FormContainer>
        Nome do Comprador:
        <input placeholder="Digite seu nome..." />
        CPF do Comprador:
        <input placeholder="Digite seu CPF..." />
        <button id={id}>Reservar Assento(s)</button>
      </FormContainer>
      <FooterContainer>
        <div>
          <img src={movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{movie.title}</p>
          <p>
            {day.weekday} - {hour}
          </p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}
export default SeatsPage;
