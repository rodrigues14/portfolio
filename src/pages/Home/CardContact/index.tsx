import { DivStiled } from "./style";

interface Props {
  src: string;
  alt: string;
  user: string;
  link: string;
  target: string;
}

export default function CardContact({ src, alt, user, link, target }: Props) {
  return (
    <a href={link} target={target} rel="noopener noreferrer">
      <DivStiled>
        <img src={src} alt={alt} />
        <p>{user}</p>
      </DivStiled>
    </a>
  )
}
