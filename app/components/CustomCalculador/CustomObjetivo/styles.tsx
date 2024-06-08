import styled from "styled-components/native";
import { theme } from "../../../themes";

export const WrapperCustomObjetivo = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentCustomObjetivo = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(10)};
`;
export const FrameCustomObjetivo = styled.Image`
  width: ${theme.size(125)};
  height: ${theme.size(125)};
`;
export const TitleCustomObjetivo = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const SubtitleCustomObjetivo = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const BlockCustomObjetivo = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SpaceCustomObjetivo = styled.View`
  padding: ${theme.size(8)};
`;

export const ButtonCustomObjetivo = styled.TouchableOpacity`
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
