import { useState } from "react";
import RadioButton from "./CustomCheckBoxEx";
import { PropsExercicios } from "./propsExercicios";
import {
  BlockCustomExercicios,
  ButtonNextCustomExercicios,
  ContentCustomExercicios,
  FrameCustomExercicios,
  SpaceCustomExercicios,
  SubtitleCustomExercicios,
  TitleCustomExercicios,
  WrapperCustomExercicios,
} from "./styles";

const CustomExercicios = ({
  title,
  subtitle,
  imageSource,
  onPress,
  onSelectActivity,
}: PropsExercicios) => {
  // const [selectedOption, setSelectedOption] = useState<string>("");

  // const handleSelect = (option: string) => {
  //   setSelectedOption(option);
  // };

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSelectWithCallback = (option: string) => {
    handleSelect(option);
    if (onSelectActivity) {
      onSelectActivity(option);
    }
  };

  return (
    <WrapperCustomExercicios>
      <FrameCustomExercicios resizeMode="contain" source={imageSource} />
      <ContentCustomExercicios>
        <SpaceCustomExercicios />

        <TitleCustomExercicios>{title}</TitleCustomExercicios>
        <SpaceCustomExercicios />

        <SubtitleCustomExercicios>{subtitle}</SubtitleCustomExercicios>
        <SpaceCustomExercicios />
        <SpaceCustomExercicios />
        <BlockCustomExercicios>
          <RadioButton
            label="Sedentario"
            selected={selectedOption === "Sedentario"}
            onSelect={() => handleSelectWithCallback("Sedentario")}
          />
          <RadioButton
            label="Ativo"
            selected={selectedOption === "Ativo"}
            onSelect={() => handleSelectWithCallback("Ativo")}
          />
          <RadioButton
            label="Moderado"
            selected={selectedOption === "Moderado"}
            onSelect={() => handleSelectWithCallback("Moderado")}
          />
          <RadioButton
            label="Muito ativo"
            selected={selectedOption === "Muito ativo"}
            onSelect={() => handleSelectWithCallback("Muito ativo")}
          />
          

          {/* <RadioButton
            label="Option 1"
            selected={selectedOption === "Option 1"}
            onSelect={() => handleSelect("Option 1")}
          />
          <RadioButton
            label="Option 2"
            selected={selectedOption === "Option 2"}
            onSelect={() => handleSelect("Option 2")}
          />
          <RadioButton
            label="Option 3"
            selected={selectedOption === "Option 3"}
            onSelect={() => handleSelect("Option 3")}
          />
          <RadioButton
            label="Option 4"
            selected={selectedOption === "Option 4"}
            onSelect={() => handleSelect("Option 4")}
          /> */}
        </BlockCustomExercicios>
        <SpaceCustomExercicios />
        <SpaceCustomExercicios />

        <ButtonNextCustomExercicios onPress={onPress}>
          <SubtitleCustomExercicios>Próximo</SubtitleCustomExercicios>
        </ButtonNextCustomExercicios>
        <SpaceCustomExercicios />
      </ContentCustomExercicios>
    </WrapperCustomExercicios>
  );
};

export default CustomExercicios;
