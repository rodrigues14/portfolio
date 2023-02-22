import { Container, Subtitle } from "../../components/UI";
import CardProjeto from "./CardProjeto";
import projetos from './projetos.json'
import { StyledProjetos } from "./style";

export default function Projetos() {
  return (
    <Container>
      <Subtitle>Projetos</Subtitle>
      <StyledProjetos>
        <CardProjeto 
          srcImage="/assets/projects/proj-copa.PNG"
          name="Copa do Mundo 2022"
          linkGithub="https://github.com/rodrigues14/copa-do-mundo"
          LinkWebsite="https://jogadores-copa-do-mundo.vercel.app/"
        />
      </StyledProjetos>
    </Container>
  )
}
