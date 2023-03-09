import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
export const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const SeatItem = styled.button`
  height: 25px;
  width: 25px;
  padding: 0;
  margin: 5px 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: inherit;
  border-radius: 25px;
  border: 1px solid ${({ border }) => border};
  background-color: ${({ color }) => color};

  font-family: "Roboto";
  font-size: 11px;
  color: #000;
  cursor: pointer;
  :disabled {
    background-color: #fbe192;
    border: 1px solid #f7c52b;
    cursor: not-allowed;
  }
`;
export const FormContainer = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
    cursor: pointer;
  }
  input {
    width: calc(100vw - 60px);
  }
`;