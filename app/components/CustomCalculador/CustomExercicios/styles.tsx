import styled from "styled-components/native";

import { theme } from "../../../themes";

export const WrapperCustomExercicios = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentCustomExercicios = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(10)};
`;
export const FrameCustomExercicios = styled.Image`
  width: ${theme.size(125)};
  height: ${theme.size(125)};
`;
export const TitleCustomExercicios = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const SubtitleCustomExercicios = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const BlockCustomExercicios = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SpaceCustomExercicios = styled.View`
  padding: ${theme.size(8)};
`;

export const ButtonCustomExercicios = styled.TouchableOpacity`
  width: ${theme.size(180)};

  padding-top: ${theme.size(8.5)};
  padding-left: ${theme.size(12)};
  padding-right: ${theme.size(12)};
  padding-bottom: ${theme.size(8.5)};

  border-radius: ${theme.size(5)};
  border: solid ${theme.size(1)} ${theme.colors.Azul};
  border-color: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.Amarelo : `${"#ffffff0"}`};

  /* background: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.Amarelo : `${"#ffffff0"}`}; */
  justify-content: center;
  align-items: center;
`;
export const RadioOuterCircle = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  background: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.Amarelo : `${"#ffffff0"}`};
  justify-content: center;
  align-items: center;
`;

export const ButtonNextCustomExercicios = styled.TouchableOpacity`
  width: auto;

  padding-top: ${theme.size(8.5)};
  padding-left: ${theme.size(12)};
  padding-right: ${theme.size(12)};
  padding-bottom: ${theme.size(8.5)};

  border-radius: ${theme.size(5)};
  background: ${theme.colors.Azul};
  justify-content: center;
  align-items: center;
`;
