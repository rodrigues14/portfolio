import styled from "styled-components"
import { black, blue, blueHover, blueLight, white } from "../../components/UI/variaveis"

export const SectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 160px);
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
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
  width: 130px;
  font-size: 18px;
  color: ${white};
  border-radius: 10px;
  margin-top: 20px;
  display: block;
  &:hover {
    background-color: ${blueHover};
    transition: all .3s ease-in-out;
  }
`;

export const Photo = styled.img`
  height: 350px;
  border-radius: 50%;
  border: 1px solid ${blue};
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: ${black};
  text-align: justify;
`;

export const ContainerContact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  align-items: center;
`;