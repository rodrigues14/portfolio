import styled from "styled-components";
import { blue, blueLight } from "../UI/variaveis";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 150px;
  border-bottom: 2px solid ${blue};
  @media (max-width: 950px) {
    padding: 0 50px;
  }
  @media (max-width: 650px) {
    padding: 0 25px;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;