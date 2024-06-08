import styled from "styled-components/native";
import { theme } from "../../../themes";

export const WrapperCustomMedidas = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentCustomMedidas = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(10)};
`;
export const FrameCustomMedidas = styled.Image`
  width: ${theme.size(125)};
  height: ${theme.size(125)};
`;
export const TitleCustomMedidas = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const SubtitleCustomMedidas = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const BlockCustomMedidas = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnerBlockCustomMedidas = styled.View`
  width: ${theme.size(75)};
  height: auto;

  flex-direction: row;
  justify-content: start;
  align-items: center;

  padding: ${theme.size(5)};

  border: solid ${theme.colors.Azul} ${theme.size(1.2)};
  border-radius: ${theme.size(5)};

  border-left-width: ${theme.size(20)};
  border-left-color: ${theme.colors.Azul};
`;
export const InputCustomMedidas = styled.TextInput`
  width: 100%;
  /* flex-direction: row;
  justify-content: center;
  align-items: center; */

  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: left;
`;
export const SpaceCustomMedidas = styled.View`
  padding: ${theme.size(8)};
`;

export const ButtonCustomMedidas = styled.TouchableOpacity`
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
// export const TextButtonCustomMedidas = styled.Text`
//   color: ${theme.colors.Branco};
//   font-size: ${theme.size(14)};
//   font-weight: 600;
//   line-height: ${theme.size(21)};
//   text-align: center;
//   text-transform: capitalize;
// `;
