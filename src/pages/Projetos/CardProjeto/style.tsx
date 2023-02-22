import styled from "styled-components";
import { blue, blueLight } from "../../../components/UI/variaveis";

export const StyledProjeto = styled.div`
  max-width: 340px;
  border: 1px solid ${blue};
  border-radius: 10px;
  margin: 8px;
  @media (max-width: 499px) {
    margin: 8px auto;
  }
  > img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid ${blue};
  }
`;

export const NameProject = styled.div`
  text-align: center;
  border-bottom: 1px solid ${blue};
  > h3 {
    font-size: 20px;
    font-weight: 500;
    padding: 8px;
  }
`;

export const LinksProject = styled.div`
  display: flex;
  > :nth-child(1) {
    border-right: 1px solid ${blue};
  }
  a {
      width: 50%;
      text-align: center;
      padding: 10px 5px;
      font-size: 18px;
      &:hover {
        background-color: ${blueLight};
        transition: all .3s ease-in-out;
      }
    }
`;
