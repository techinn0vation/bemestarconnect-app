import { TouchableOpacity } from "react-native";
import {
  Container,
  RadioOuterCircle,
  RadioInnerCircle,
  RadioText,
} from "./styles";

interface RadioButtonProps {
  label: string;
  onSelect: () => void;
  selected: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  onSelect,
  selected,
}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Container>
        <RadioOuterCircle selected={selected}>
          {selected && <RadioInnerCircle selected={selected} />}
        </RadioOuterCircle>
        <RadioText>{label}</RadioText>
      </Container>
    </TouchableOpacity>
  );
};

export default RadioButton;
