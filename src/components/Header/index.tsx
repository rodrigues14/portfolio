import logo from '../../assets/logo.svg'
import { HeaderStyled, UlStyled } from './styles'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" />
      <nav>
        <UlStyled>
          <li>Home</li>
          <li>Habilidades</li>
          <li>Projetos</li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  )
}
