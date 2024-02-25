import { theme } from "../../themes";

import {
  ButtonFormSteps,
  ContentFormSteps,
  ContentInputFormSteps,
  DividingLineFormSteps,
  FrameSteps,
  InnerInputFormSteps,
  InnerMessageFormSteps,
  LateralTextFormSteps,
  MessageFormSteps,
  SubFraseFormSteps,
  TextButtonFormSteps,
  ViewFormSteps,
} from "./styles";

interface PropsFormSteps {
  pergunta: string;
  subFrase: string;
  LateralText: string;
  placeholder?: string;
  btFormSteps: string;
  onClick: () => void;
  value?: string;
  onChangeText?: (value: string) => void;
}

export default function FormSteps({
  pergunta,
  subFrase,
  LateralText,
  placeholder,
  btFormSteps,
  onClick,
  value,
  onChangeText,
}: PropsFormSteps) {
  return (
    <ContentFormSteps>
      <ViewFormSteps>
        <FrameSteps
          resizeMode="contain"
          source={require("..//..//assets/images/Writing.png")}
        />
        <MessageFormSteps>
          <InnerMessageFormSteps>
            <InnerMessageFormSteps>{pergunta}</InnerMessageFormSteps>
          </InnerMessageFormSteps>
        </MessageFormSteps>

        <SubFraseFormSteps>{subFrase}</SubFraseFormSteps>
        <DividingLineFormSteps />
        <DividingLineFormSteps />

        <ContentInputFormSteps>
          <InnerInputFormSteps
            placeholder={placeholder}
            placeholderTextColor={theme.colors.CinzaClaro}
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric"
          />
          <DividingLineFormSteps />
          <LateralTextFormSteps>{LateralText}</LateralTextFormSteps>
        </ContentInputFormSteps>
        <DividingLineFormSteps />
        <DividingLineFormSteps />

        <ButtonFormSteps onPress={onClick}>
          <TextButtonFormSteps>{btFormSteps}</TextButtonFormSteps>
        </ButtonFormSteps>
      </ViewFormSteps>
    </ContentFormSteps>
  );
}
