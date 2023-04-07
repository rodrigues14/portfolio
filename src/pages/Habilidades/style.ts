import styled from "styled-components";
import { blue } from "../../components/UI/variaveis";

export const TecsImg = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 900px;
  margin-inline: auto;
  @media (max-width: 1400px) {
    max-width: 735px;
  }
  img {
    width: 150px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: .3s;
    }
    @media (max-width: 1400px) {
      width: 100px;
    }
    @media (max-width: 530px) {
      width: 60px;
    }
  }
`; 

export const TecsDescription = styled.div`
  text-align: center;
  margin-top: 60px;
  h3 {
    font-size: 26px;
    font-weight: 500;
    color: ${blue};
    margin-bottom: 20px;
    text-decoration: underline;
    @media (max-width: 1400px) {
      font-size: 22px;
    }
  }
  p{
    font-size: 22px;
    max-width: 900px;
    margin-inline: auto;
    color: ${({ theme }) => theme.text};
    @media (max-width: 1400px) {
      font-size: 18px;
      max-width: 700px;
    }
  }
`
