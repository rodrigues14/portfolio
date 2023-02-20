import styled from 'styled-components'
import { black, blueLight } from '../UI/variaveis';

const FooterStyled = styled.footer`
  background-color: ${blueLight};
  padding: 20px 10px;
  text-align: center;
  a {
    color: ${black};
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>Desenvolvido por <a href="https://www.linkedin.com/in/lucas-rodrigues-perfil/">Lucas Rodrigues</a></p>
    </FooterStyled>
  )
}
