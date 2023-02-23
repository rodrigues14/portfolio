import { Link, useLocation } from "react-router-dom";
import { LiStyled } from "./style";

export default function LinkHeader({ to, children }: { to: string, children: string }) {
  const location = useLocation();
  return (
    <LiStyled>
      <Link to={to} style={location.pathname === to ? { textDecoration: "underline" } : {}} >
        {children}
      </Link>
    </LiStyled>
  )
}
