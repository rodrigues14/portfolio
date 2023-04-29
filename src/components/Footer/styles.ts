import styled from "styled-components";
import { blueHover, blueLight } from "../UI/variaveis";

export const FooterSection = styled.footer`
  padding: 20px 150px;
  background-color:  ${({ theme }) => theme.footer};
  @media (max-width: 780px) {
    padding: 20px 20px;
  }
`;

export const FooterStyled = styled.div`
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
  > div p {
    color:  ${({ theme }) => theme.text};
     a {
      color: ${blueHover};
    }
    @media (max-width: 780px) {
      text-align: center;
    }
  }
  .credits {
    color:  ${({ theme }) => theme.text};
    text-decoration: underline;
  }
`;
