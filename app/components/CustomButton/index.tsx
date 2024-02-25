import { DisplayLink } from "./styles";

interface PropButtonLink {
  href: string;
  text: string;
}

export default function CustomButton({ href, text }: PropButtonLink) {
  return <DisplayLink href={href}>{text}</DisplayLink>;
}
