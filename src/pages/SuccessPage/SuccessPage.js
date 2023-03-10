import { useNavigate } from "react-router-dom";
import { PageContainer, TextContainer } from "./SuccessStyle";
function SuccessPage({ user }) {
  const navigate = useNavigate();
  const { movie, date, hour, name, cpf, seats } = user;
  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{movie}</p>
        <p>
          {date} - {hour}
        </p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {seats.map((seat) => {
          return <p key={`chair${seat}`}>Assento {seat}</p>;
        })}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </TextContainer>

      <button
        onClick={() => {
          navigate(`/`);
        }}
        data-test="go-home-btn">
        Voltar para Home
      </button>
    </PageContainer>
  );
}
export default SuccessPage;
