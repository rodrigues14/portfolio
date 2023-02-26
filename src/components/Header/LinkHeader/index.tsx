import { Link, useLocation } from "react-router-dom";
import { LiStyled } from "./style";

interface props {
  to: string,
  children: string,
  toggleMenu: () => void
}

export default function LinkHeader({ to, children, toggleMenu }: props) {
  const location = useLocation();
  return (
    <LiStyled onClick={toggleMenu}>
      <Link 
        to={to} 
        style={location.pathname === to ? { textDecoration: "underline" } : {}} 
      >
        {children}
      </Link>
    </LiStyled>
  )
}
