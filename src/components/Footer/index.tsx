import { FooterStyled } from './styles';

export default function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-rodrigues-perfil/">Lucas Rodrigues</a></p>
      </div>
      <div>
        <p> 
          Web illustrations by <a href="https://storyset.com/web" className='credits'>Storyset</a>
        </p>
      </div>
    </FooterStyled>
  )
}
