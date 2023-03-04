import styled from "styled-components";
import { Container } from "../../components/UI";
import { Title } from "../Home/style";
import error from './error404.svg'

const Error404 = styled.div`
  img {
    max-height: 400px;
    display: block;
    margin-inline: auto;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>Ops... <br /> Página não encontrada!</Title>
      <Error404>
        <img src={error} alt="Erro 404, página não encontrada" />
      </Error404>
    </Container>
  )
}
