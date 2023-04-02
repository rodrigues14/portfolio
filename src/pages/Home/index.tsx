import photo from "/assets/my-photo.png";
import { Button, ContainerContact, Photo, SectionStyled, Text, Title } from "./style";
import CardContact from "./CardContact";
import contacts from './contacts.json'
import { Container, Subtitle } from "../../components/UI";
import { motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs'
import styled from "styled-components";
import curriculo from "./pdf/lucas-rodrigues.pdf";

const SobreMim = styled.div`
  display: flex;
  img {
    height: 350px;
  }
  @media (max-width: 805px) {
    flex-direction: column-reverse;
  }
`;

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
          <Button
            href={curriculo}
            download
          >
            Currículo <BsDownload size={21} />
          </Button>
        </motion.div>
        <Photo
          src={photo} alt="Foto de Lucas Rodrigues"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </SectionStyled>
      <section>
        <Subtitle>Sobre mim</Subtitle>
        <SobreMim>
          <img src="/assets/Coding-bro.svg" alt="Ilustração de uma pessoa em frente ao computador" />
          <div>
            <Text>
              Meu nome é Lucas, tenho 19 anos e atualmente estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> na FIAP. Estou em busca de um estágio com foco em <strong>desenvolvimento Front-end</strong> ou uma oportunidade como Júnior, uma vez que é a área que eu tenho maior interesse em adquirir conhecimento e atuar profissionalmente. No momento, me dedico aos estudos de <strong>React</strong> com <strong>TypeScript</strong> e estou realizando alguns projetos, para praticar meus novos conhecimentos.
            </Text>
            <Text>
              Comecei a estudar programação no início de 2022. No começo, eu achei complicado e que isso não era para mim, mas depois que eu comecei a entender um pouco mais sobre, e tudo o que pode ser feito com a <strong>tecnologia</strong>, eu passei a gostar e me dedicar cada vez mais e sigo em busca dos meus objetivos.
            </Text>
          </div>
        </SobreMim>
      </section>
      <section>
        <Subtitle>Contato</Subtitle>
        <ContainerContact
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: .5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {
            contacts.map(contact => (
              <CardContact
                alt={contact.alt}
                user={contact.user}
                src={contact.srcImage}
                link={contact.link}
                target={contact.target}
                key={contact.id}
              />
            ))
          }
        </ContainerContact>
      </section>
    </Container>
  )
}
