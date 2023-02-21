import { DivStiled } from "./style";

interface Props {
  src: string;
  alt: string;
  user: string;
  link: string;
}

export default function CardContact({ src, alt, user, link }: Props) {
  return (
    <a href={link} target="_blank">
      <DivStiled>
        <img src={src} alt={alt} />
        <p>{user}</p>
      </DivStiled>
    </a>
  )
}
