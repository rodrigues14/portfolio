import styled from 'styled-components'
import { blueHover, blueLight } from '../UI/variaveis';

const FooterStyled = styled.footer`
  background-color: ${blueLight};
  padding: 20px 10px;
  text-align: center;
  background-color:  ${({ theme }) => theme.footer};
  > p {
    color:  ${({ theme }) => theme.text};
    margin-bottom: 10px;
     a {
      color: ${blueHover};
    }
  }
  .credits {
    color:  ${({ theme }) => theme.text};
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/lucas-rodrigues-perfil/">Lucas Rodrigues</a></p>
      <a href="https://storyset.com/web" className='credits'>Web illustrations by Storyset</a>
    </FooterStyled>
  )
}
