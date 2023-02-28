import styled from "styled-components";
import { blue, blueLight } from "../UI/variaveis";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 150px;
  border-bottom: 2px solid ${blue};
  background-color:  ${({ theme }) => theme.header};
  @media (max-width: 950px) {
    padding: 0 50px;
    nav {
      margin-right: 30px;
    }
  }
  @media (max-width: 650px) {
    padding: 0 25px;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1rem;
  @media (max-width: 550px) {
    display: ${({ menuBurger }: { menuBurger: boolean }) => menuBurger ? "flex": "none"};
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 150px;
    height: 200px;
    border-radius: 0 0 0 25px;
    top: 70px;
    right: 0px;
    background-color: ${blue};
    animation: fromTop .5s .3s backwards;
  }
  @keyframes fromTop {
    from {
        opacity: 0;
        transform: translateY(-70px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }
`;

export const MenuBurger = styled.button`
  margin-right: 20px;
  margin-top: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  path {
    color: ${({ theme }) => theme.iconColor};
  }
  @media (max-width: 550px) {
    display: block !important;
  }
`;