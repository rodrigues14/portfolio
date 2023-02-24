import { Container, Subtitle } from "../../components/UI";
import CardProjeto from "./CardProjeto";
import projetos from './projetos.json'
import { StyledProjetos } from "./style";
import { motion } from 'framer-motion';

export default function Projetos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: .2 } }}
    >
      <Container>
        <Subtitle>Projetos</Subtitle>
        <StyledProjetos>
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
    </motion.div>
  )
}
