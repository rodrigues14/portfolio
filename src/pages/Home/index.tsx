import Header from "../../components/Header";
import photo from "/assets/my-photo.png";
import { Button, ContainerContact, Photo, SectionStyled, Text, Title } from "./style";
import { Container } from "../../components/DefaultPage";
import { Subtitle } from "../../components/Subtitle";
import CardContact from "./CardContact";
import contacts from './contacts.json'
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SectionStyled>
          <div>
            <Title>
              Olá, eu sou <br />
              <span>Lucas Rodrigues</span> <br />
              Desenvolvedor Front-end
            </Title>
            <Button>
              Currículo
            </Button>
          </div>
          <div>
            <Photo src={photo} alt="Minha foto" />
          </div>
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
          <ContainerContact>
            {
              contacts.map(contact => (
                <CardContact
                  alt={contact.alt}
                  link={contact.link}
                  src={contact.srcImage}
                  key={contact.id}
                />
              ))
            }
          </ContainerContact>
        </section>
      </Container>
      <Footer />
    </>
  )
}
