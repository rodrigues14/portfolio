import styled from "styled-components"
import { black, blue, white } from "../../components/UI/variaveis"

export const SectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  span {
    font-size: 38px;
    color: ${blue};
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${blue};
  padding: 12px 25px;
  font-size: 18px;
  color: ${white};
  border-radius: 10px;
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
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;