import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.js";
import {
  PageContainer,
  SeatsContainer,
  SeatItem,
  CaptionContainer,
  CaptionItem,
  CaptionCircle,
  FormContainer,
  FooterContainer,
} from "./SeatsStyle.js";
const mark = [
  { color: "#C3CFD9", border: "#7B8B99" },
  { color: "#FBE192", border: "#F7C52B" },
  { color: "#1AAE9E", border: "#0E7D71" },
];
function SeatsPage({ id }) {
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    data.getSeats(id).then((data) => {
      setSeats(data);
    });
  }, []);
  if (seats.length === 0) return <div>Carregando...</div>;
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seats.seats.map((seat) => {
          console.log(seat);
          return (
            <SeatItem
              key={seat.id}
              disabled={!seat.isAvailable}
              color={seat.isAvailable ? mark[0].color : mark[1].color}
              border={seat.isAvailable ? mark[0].border : mark[1].border}>
              {seat.name}
            </SeatItem>
          );
        })}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle color={mark[2].color} border={mark[2].border} />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle color={mark[0].color} border={mark[0].border} />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle color={mark[1].color} border={mark[1].border} />
          Indisponível
        </CaptionItem>
      </CaptionContainer>
      <FormContainer>
        Nome do Comprador:
        <input placeholder="Digite seu nome..." />
        CPF do Comprador:
        <input placeholder="Digite seu CPF..." />
        <button id={seats.id}>Reservar Assento(s)</button>
      </FormContainer>
      <FooterContainer>
        <div>
          <img src={seats.movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{seats.movie.title}</p>
          <p>
            {seats.day.weekday} - {seats.name}
          </p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}
export default SeatsPage;
