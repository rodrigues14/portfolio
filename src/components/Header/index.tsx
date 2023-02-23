import logo from '/assets/logo.svg'
import { HeaderStyled, UlStyled } from './styles'
import LinkHeader from './LinkHeader';

export default function Header() {

  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" />
      <nav>
        <UlStyled>
          <LinkHeader to='/'>
            Home
          </LinkHeader>
          <LinkHeader to='/habilidades'>
            Habilidades
          </LinkHeader>
          <LinkHeader to='/projetos'>
          Projetos
          </LinkHeader>
        </UlStyled>
      </nav>
    </HeaderStyled>
  )
}
