import styled from "styled-components/native";
import { theme } from "../../../themes";

export const WrapperSavedSenha = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(15)};

  position: fixed;
  top: ${theme.size(-200)};
`;
export const ContentSavedSenha = styled.View`
  width: 100%;
  height: auto;
  background: ${theme.colors.cinzaEscuro};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(15)};

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnerMessageSaveSenha = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  line-height: ${theme.size(21)};
  font-weight: 600;
  text-align: center;
`;
export const FrameSaveSenha = styled.Image`
  width: ${theme.size(160)};
  height: ${theme.size(160)};
`;
export const DividingLineSavedSenha = styled.View`
  padding: ${theme.size(10)};
`;
