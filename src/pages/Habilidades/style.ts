import styled from "styled-components";
import { blue } from "../../components/UI/variaveis";

export const TecsImg = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 745px;
  margin-inline: auto;
  img {
    width: 100px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: .3s;
    }
  }
`; 

export const TecsDescription = styled.div`
  text-align: center;
  margin-top: 60px;
  h3 {
    font-size: 22px;
    font-weight: 500;
    color: ${blue};
    margin-bottom: 20px;
    text-decoration: underline;
  }
  p{
    font-size: 18px;
    max-width: 700px;
    margin-inline: auto;
  }
`
