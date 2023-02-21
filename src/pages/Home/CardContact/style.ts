import styled from "styled-components";
import { blue, blueLight, white } from "../../../components/UI/variaveis";

export const DivStiled = styled.div`
  border: 2px solid ${blue};
  text-align: center;
  padding: 20px 10px;
  border-radius: 10px;
  width: 250px;
  &:hover {
    background-color: ${blueLight};
    color: ${white};
    transition: all .3s ease-in-out;
  }
`
