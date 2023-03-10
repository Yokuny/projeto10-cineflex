import { useEffect, useState } from "react";
import data from "../../data/data.js";
import post from "../../data/post.js";
import { useNavigate } from "react-router-dom";
import { PageContainer, SeatsContainer, SeatItem, FormContainer } from "./SeatsStyle.js";
import SeatsInfo from "./SeatsInfo.js";
import FooterContainer from "./FooterContainer.js";
const mark = [
  { color: "#C3CFD9", border: "#7B8B99" },
  { color: "#FBE192", border: "#F7C52B" },
  { color: "#1AAE9E", border: "#0E7D71" },
];
function SeatsPage({ id, final }) {
  const [hour, setHour] = useState("");
  const [movie, setMovie] = useState({});
  const [day, setDay] = useState({});
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();
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
              onClick={() => makeSelection(seat.id)}
              data-test="seat">
              {seat.name}
            </SeatItem>
          );
        })}
      </SeatsContainer>
      <SeatsInfo colors={mark} />
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target[0].value;
          const cpf = e.target[1].value;
          const ticket = post(name, cpf);
          const chair = [];
          seats.forEach((seat) => {
            if (seat.selected === true) {
              ticket.ids.push(seat.id);
              chair.push(seat.name);
            }
          });
          data.reserveSeat(ticket).then(() => {
            final({
              name: name,
              cpf: cpf,
              seats: chair,
              movie: movie.title,
              date: day.date,
              hour: hour,
            });
            navigate(`/sucesso`);
          });
        }}>
        Nome do Comprador:
        <input
          placeholder="Digite seu nome..."
          type="text"
          minLength="10"
          required
          onChange={(e) => {
            if (e.target.value.length >= 10) {
              e.target.style.color = mark[2].color;
              e.target.style.border = `2px solid #1AAE9E`;
            } else {
              e.target.style.color = "crimson";
              e.target.style.border = `2px solid crimson`;
            }
          }}
          data-test="client-name"
        />
        CPF do Comprador:
        <input
          placeholder="Digite seu CPF..."
          type="text"
          required
          onChange={(e) => {
            const cpf = e.target.value.replace(/[^\d]+/g, "");
            if (cpf.length < 11 || parseInt(cpf) > 99999999999) {
              e.target.style.color = "crimson";
              e.target.style.border = `2px solid crimson`;
            } else {
              e.target.style.border = `2px solid #1AAE9E`;
              e.target.style.color = "#1AAE9E";
            }
            e.target.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
          }}
          data-test="client-cpf"
        />
        <button id={id} data-test="book-seat-btn">
          Reservar Assento(s)
        </button>
      </FormContainer>
      <FooterContainer
        img={movie.posterURL}
        movie={movie.title}
        day={day.weekday}
        hour={hour}
        data-test="footer"></FooterContainer>
    </PageContainer>
  );
}
export default SeatsPage;
