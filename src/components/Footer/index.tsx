import styled from 'styled-components'
import { blueHover, blueLight } from '../UI/variaveis';

const FooterStyled = styled.footer`
  background-color: ${blueLight};
  padding: 20px 10px;
  text-align: center;
  background-color:  ${({ theme }) => theme.footer};
  > p {
    color:  ${({ theme }) => theme.text};
    a {
      color: ${blueHover};
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>Desenvolvido por <a href="https://www.linkedin.com/in/lucas-rodrigues-perfil/">Lucas Rodrigues</a></p>
    </FooterStyled>
  )
}
