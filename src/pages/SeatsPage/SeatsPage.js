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

function SeatsPage({ id }) {
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    data.getSeats(id).then((data) => {
      setSeats(data);
    });
  }, []);
  console.log(seats);
  if (seats.length === 0) return <div>Carregando...</div>;
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seats.seats.map((seat) => (
          <SeatItem disable={!seat.isAvailable} key={seat.key}>
            {seat.name}
          </SeatItem>
        ))}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle />
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
