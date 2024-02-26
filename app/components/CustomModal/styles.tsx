import styled from "styled-components/native";
import { theme } from "../../themes";

export const WrapperCustomModal = styled.View`
  width: 100%;
  height: 100%;
  padding: ${theme.size(15)};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  background: ${theme.colors.Opacity};

  top: ${theme.size(0)};
  z-index: 1;
`;
export const ContentCustomModal = styled.View`
  width: 100%;
  height: auto;
  background: ${theme.colors.cinzaEscuro};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(15)};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;
export const FrameCustomModal = styled.Image`
  width: ${theme.size(130)};
  height: ${theme.size(130)};

  position: absolute;
  top: ${theme.size(-120)};
  left: ${theme.size(100)};
`;
export const ButtonCustomModal = styled.TouchableOpacity`
  width: auto;
  padding: ${theme.size(10)};
  border-radius: ${theme.size(5)};
  background: ${theme.colors.Azul};
`;
export const TextBtCustomModal = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(13.5)};
  line-height: ${theme.size(20.25)};
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;
