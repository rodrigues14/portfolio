import { motion } from "framer-motion";
import styled from "styled-components"
import { colorBlack, blue, blueHover, white } from "../../components/UI/variaveis"

export const SectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 160px);
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color:  ${({ theme }) => theme.text};
  span {
    font-size: 38px;
    color: ${blue};
  }
`;

export const Button = styled.a`
  border: none;
  background-color: ${blue};
  text-align: center;
  padding: 12px 25px;
  width: 155px;
  font-size: 18px;
  color: ${white};
  border-radius: 10px;
  margin-top: 20px;
  display: block;
  &:hover {
    background-color: ${blueHover};
    transition: all .3s ease-in-out;
  }
  svg {
    margin-left: 7px;
    path {
    color: ${white};
  }
  } 
`;

export const Photo = styled(motion.img)`
  height: 350px;
  width: 320.58px;
  border-radius: 50%;
  border: 1px solid ${blue};
  @media (max-width: 350px) {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: ${colorBlack};
  color: ${({ theme }) => theme.text};
  strong {
    color: ${({ theme }) => theme.text};
  }
`;

export const ContainerContact = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  align-items: center;
`;