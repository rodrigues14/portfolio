import styled from "styled-components";
import { blue, blueLight } from "../../../components/UI/variaveis";

export const DivStiled = styled.div`
  border: 2px solid ${blue};
  text-align: center;
  padding: 20px 10px;
  border-radius: 10px;
  margin: 5px;
  > img {
    width: 60px;
  }
  > p {
    color: ${({ theme }) => theme.text};
  }
  &:hover {
    background-color: ${blueLight};
    transition: all .3s ease-in-out;
    p {
      color: black;
    }
  }
`
