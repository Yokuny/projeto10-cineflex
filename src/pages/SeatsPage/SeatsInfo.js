import styled from "styled-components";
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
const CaptionCircle = styled.div`
  border: 1px solid ${({ border }) => border};
  background-color: ${({ color }) => color};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const SeatsInfo = ({ colors }) => (
  <CaptionContainer>
    <CaptionItem>
      <CaptionCircle color={colors[2].color} border={colors[2].border} />
      Selecionado
    </CaptionItem>
    <CaptionItem>
      <CaptionCircle color={colors[0].color} border={colors[0].border} />
      Disponível
    </CaptionItem>
    <CaptionItem>
      <CaptionCircle color={colors[1].color} border={colors[1].border} />
      Indisponível
    </CaptionItem>
  </CaptionContainer>
);
export default SeatsInfo;
