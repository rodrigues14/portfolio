import styled from 'styled-components'
import { blueHover, blueLight } from '../UI/variaveis';
import linkedin from '/assets/socialMedia/linkedin-logo.svg';
import gmail from '/assets/socialMedia/gmail-logo.svg';
import github from '/assets/socialMedia/github-logo.svg';

const FooterStyled = styled.footer`
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

export default function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/lucas-rodrigues-perfil/">Lucas Rodrigues</a></p>
      </div>
      <div>
        <p> 
          Web illustrations by <a href="https://storyset.com/web" className='credits'>Storyset</a>
        </p>
      </div>
    </FooterStyled>
  )
}
