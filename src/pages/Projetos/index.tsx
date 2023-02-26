import { Container, Subtitle } from "../../components/UI";
import CardProjeto from "./CardProjeto";
import projetos from './projetos.json'
import { StyledProjetos } from "./style";

export default function Projetos() {
  return (
      <Container>
        <Subtitle>Projetos</Subtitle>
          <StyledProjetos
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {
              projetos.map(projeto => (
                <CardProjeto
                  key={projeto.id}
                  name={projeto.name}
                  srcImage={projeto.image}
                  linkGithub={projeto.linkGithub}
                  LinkWebsite={projeto.deploy}
                />
              ))
            }
          </StyledProjetos>
      </Container>
  )
}
