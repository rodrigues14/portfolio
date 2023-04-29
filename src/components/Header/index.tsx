import logo from '/logo.png'
import { HeaderStyled, UlStyled, MenuBurger } from './styles'
import LinkHeader from './LinkHeader';
import { IoMenu, IoClose } from 'react-icons/io5'
import { useState } from 'react'

export default function Header() {
  const [menuBurger, setMenuBurger] = useState(false);

  function toggleMenu() {
    setMenuBurger(!menuBurger)
  }

  return (
    <HeaderStyled>
      <div>
        <img src={logo} alt="Logo" />
        <nav>
          <UlStyled menuBurger={menuBurger}>
            <LinkHeader to='/' toggleMenu={toggleMenu}>
              Home
            </LinkHeader>
            <LinkHeader to='/habilidades' toggleMenu={toggleMenu}>
              Habilidades
            </LinkHeader>
            <LinkHeader to='/projetos' toggleMenu={toggleMenu}>
              Projetos
            </LinkHeader>
          </UlStyled>
          <MenuBurger onClick={toggleMenu}>
            {menuBurger ? <IoClose size={30} /> : <IoMenu size={30} />}
          </MenuBurger>
        </nav>
      </div>
    </HeaderStyled>
  )
}
