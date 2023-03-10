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

      <TextContainer>
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{movie}</p>
        <p>
          {date} - {hour}
        </p>
      </TextContainer>

      <TextContainer>
        <strong>
          <p>Ingressos</p>
        </strong>
        {seats.map((seat) => {
          return <p key={`chair${seat}`}>Assento {seat}</p>;
        })}
      </TextContainer>

      <TextContainer>
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </TextContainer>

      <button
        onClick={() => {
          navigate(`/`);
        }}>
        Voltar para Home
      </button>
    </PageContainer>
  );
}
export default SuccessPage;
