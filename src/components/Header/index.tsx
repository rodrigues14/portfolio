import logo from '/assets/logo.svg'
import { HeaderStyled, UlStyled } from './styles'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" />
      <nav>
        <UlStyled>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/habilidades">
            <li>Habilidades</li>
          </Link>
          <Link to="/projetos">
            <li>Projetos</li>
          </Link>
        </UlStyled>
      </nav>
    </HeaderStyled>
  )
}
