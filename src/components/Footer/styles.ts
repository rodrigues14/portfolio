import styled from "styled-components";
import { blueHover, blueLight } from "../UI/variaveis";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${blueLight};
  padding: 20px 150px;
  background-color:  ${({ theme }) => theme.footer};
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
  > div p {
    color:  ${({ theme }) => theme.text};
     a {
      color: ${blueHover};
    }
  }
  .credits {
    color:  ${({ theme }) => theme.text};
    text-decoration: underline;
  }
`;
