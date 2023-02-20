import { DivStiled } from "./style";

interface Props {
  src: string;
  alt: string;
  link: string;
}

export default function CardContact({ src, alt, link }: Props) {
  return (
    <DivStiled>
      <img src={src} alt={alt} />
      <p>{link}</p>
    </DivStiled>
  )
}
