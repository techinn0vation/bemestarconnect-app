import { DisplayText } from "./styles";

interface PropsText {
  text: string;
}

export default function CustomText({ text }: PropsText) {
  return <DisplayText>{text}</DisplayText>;
}
