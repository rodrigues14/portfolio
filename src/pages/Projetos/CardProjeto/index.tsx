import { LinksProject, NameProject, StyledProjeto } from "./style"

interface Props {
  name: string
  srcImage: string
  linkGithub: string
  LinkWebsite: string
}

export default function CardProjeto({ name, srcImage, linkGithub, LinkWebsite }: Props) {
  return (
    <StyledProjeto>
      <img src={srcImage} alt={name} />
      <NameProject>
        <h3>{name}</h3>
      </NameProject>
      <LinksProject>
        <a target="_blank" rel="noopener noreferrer" href={linkGithub}>Repositório</a>
        <a target="_blank" rel="noopener noreferrer" href={LinkWebsite}>Website</a>
      </LinksProject>
    </StyledProjeto>
  )
}
