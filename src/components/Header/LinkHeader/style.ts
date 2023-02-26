import styled from "styled-components";
import { blueLight, colorBlack } from "../../UI/variaveis";

export const LiStyled = styled.ul`
  font-size: 18px;
  padding: .5rem 0;
  @media (max-width: 550px) {
    width: 100%;
    padding: 0;
  }
  a {
    padding: .5rem 1rem;
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${blueLight};
      transition: all .3s ease-in-out;
      color: black;
    }
    @media (max-width: 550px) {
      display: block;
      color: ${colorBlack}
    }
  }
`;