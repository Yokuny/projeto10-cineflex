import { PageContainer, TextContainer } from "./SuccessStyle";
function SuccessPage() {
  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer>
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>Tudo em todo lugar ao mesmo tempo</p>
        <p>03/03/2023 - 14:00</p>
      </TextContainer>

      <TextContainer>
        <strong>
          <p>Ingressos</p>
        </strong>
        <p>Assento 01</p>
        <p>Assento 02</p>
        <p>Assento 03</p>
      </TextContainer>

      <TextContainer>
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: Letícia Chijo</p>
        <p>CPF: 123.456.789-10</p>
      </TextContainer>

      <button>Voltar para Home</button>
    </PageContainer>
  );
}
export default SuccessPage;
