import styled from "styled-components/native";
import { theme } from "../../themes";

export const WrapperCustomResposta = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(15)};

  position: fixed;
  top: ${theme.size(-130)};
`;
export const ContentCustomResposta = styled.View`
  width: 100%;
  height: auto;
  background: ${theme.colors.cinzaEscuro};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(15)};

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ViewCustomResposta = styled.View`
  flex: 1;
  height: auto;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FrameCustomResposta = styled.Image`
  width: ${theme.size(110)};
  height: ${theme.size(110)};

  position: absolute;
  top: ${theme.size(-86)};
  left: ${theme.size(50)};
`;
export const MessageCustomResposta = styled.View`
  width: auto;
  background: ${theme.colors.Azul};
  border-top-left-radius: ${theme.size(6)};
  border-top-right-radius: ${theme.size(6)};
  border-bottom-right-radius: ${theme.size(6)};

  justify-content: center;
  align-items: center;
  padding: ${theme.size(10)};
  position: absolute;
  top: ${theme.size(-100)};
  left: ${theme.size(150)};
`;
export const InnerMessageCustomResposta = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  line-height: ${theme.size(21)};
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;
export const BlockCustomResposta = styled.View`
  flex: 1;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextCustomResposta = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  line-height: ${theme.size(21)};
  font-weight: 600;
  text-align: center;
`;
export const FrameLottieResposta = styled.Image`
  width: ${theme.size(50)};
  height: ${theme.size(50)};
`;
export const DividingLineResposta = styled.View`
  padding: ${theme.size(6)};
`;
