import styled from "styled-components";
import { blueLight } from "../../UI/variaveis";

export const LiStyled = styled.ul`
  font-size: 18px;
  padding: .5rem 0;
  &:hover {
    background-color: ${blueLight};
    transition: all .3s ease-in-out;
  }
  a {
    padding: .5rem 1rem;
  }
`;