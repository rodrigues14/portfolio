import { useState } from "react";
import { Container } from "../../components/DefaultPage";
import { Subtitle } from "../../components/Subtitle";
import { TecsDescription, TecsImg } from "./style";
import tecs from './tecs.json'

export default function Habilidades() {
  const [tecClick, setTecClick] = useState({
    nameTec: "React",
    descriptionTec: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
  })
  function showPhrase(id: typeof tecs[0]) {
    const tec = tecs.find(tec => tec.name === id.name);
    setTecClick({
      nameTec: String(tec?.name),
      descriptionTec: String(tec?.description)
    })
  }
  return (
    <Container>
      <Subtitle>Habilidades</Subtitle>
      <div>
        <TecsImg>
          {tecs.map(tec => (
            <img 
              key={tec.name} 
              src={tec.image} 
              alt={tec.name} 
              onClick={() => showPhrase(tec)}
            />
          ))}
        </TecsImg>
        <TecsDescription>
          <h3>{tecClick.nameTec}</h3>
          <p>{tecClick.descriptionTec}</p>
        </TecsDescription>
      </div>
    </Container>
  )
}
