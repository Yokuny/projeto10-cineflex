import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  SeatsContainer,
  SeatItem,
  CaptionContainer,
  CaptionItem,
  CaptionCircle,
  FormContainer,
  FooterContainer,
} from "./SeatsPage.styles";
function SeatsPage() {
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        <SeatItem>01</SeatItem>
        <SeatItem>02</SeatItem>
        <SeatItem>03</SeatItem>
        <SeatItem>04</SeatItem>
        <SeatItem>05</SeatItem>
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
        <button>Reservar Assento(s)</button>
      </FormContainer>
      <FooterContainer>
        <div>
          <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
        </div>
        <div>
          <p>Tudo em todo lugar ao mesmo tempo</p>
          <p>Sexta - 14h00</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}
export default SeatsPage;
