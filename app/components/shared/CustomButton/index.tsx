import { TextCustomButton, WrapperCustomButton } from "./styles";

interface PropsButton {
  text: string;
  onPress: () => void;
}

export default function CustomButton({ text, onPress }: PropsButton) {
  return (
    <WrapperCustomButton onPress={onPress}>
      <TextCustomButton>{text}</TextCustomButton>
    </WrapperCustomButton>
  );
}
