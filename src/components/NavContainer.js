import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import BackArrow from "../assets/arrow.svg";
const move = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;
const NavStyle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
  img {
    position: absolute;
    left: 18px;
    cursor: pointer;
    &:hover {
      -webkit-animation: ${move} 1s infinite;
      -moz-animation: ${move} 1s infinite;
      -o-animation: ${move} 1s infinite;
      animation: ${move} 1s infinite;
    }
  }
`;
const NavContainer = ({ children, btnCondition }) => {
  const navigate = useNavigate();
  return (
    <NavStyle>
      {btnCondition && <img src={BackArrow} alt="" onClick={() => navigate(-1)} />}
      {children}
    </NavStyle>
  );
};
export default NavContainer;
