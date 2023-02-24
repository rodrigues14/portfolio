import photo from "/assets/my-photo.png";
import { Button, ContainerContact, Photo, SectionStyled, Text, Title } from "./style";
import CardContact from "./CardContact";
import contacts from './contacts.json'
import { Container, Subtitle } from "../../components/UI";
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <Container>
        <SectionStyled>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: .3 }}
          >
            <Title>
              Olá, eu sou <br />
              <span>Lucas Rodrigues</span> <br />
              Desenvolvedor Front-end
            </Title>
            <div>
              <Button href="#">
                Currículo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Photo src={photo} alt="Minha foto" />
          </motion.div>
        </SectionStyled>
        <section>
          <Subtitle>Sobre mim</Subtitle>
          <Text>
            Meu nome é Lucas, tenho 19 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas na FIAP. Estou em busca de um estágio com foco em desenvolvimento web front-end, uma vez que é a área que eu tenho maior interesse em adquirir conhecimento e atuar profissionalmente. No momento, me dedico aos estudos de React e estou realizando alguns projetos, para praticar meus novos conhecimentos.
          </Text>
          <Text>
            Comecei a estudar programação no início de 2022. No começo, eu achei complicado e que isso não era para mim, mas depois que eu comecei a entender um pouco mais sobre, e tudo o que pode ser feito com a tecnologia, eu passei a gostar e me dedicar cada vez mais e sigo em busca dos meus objetivos.
          </Text>
        </section>
        <section>
          <Subtitle>Contato</Subtitle>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: .5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
          <ContainerContact>
            {
              contacts.map(contact => (
                <CardContact
                  alt={contact.alt}
                  user={contact.user}
                  src={contact.srcImage}
                  link={contact.link}
                  key={contact.id}
                />
              ))
            }
          </ContainerContact>
          </motion.div>
        </section>
      </Container>
  )
}
