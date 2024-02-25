import styled from "styled-components/native";
import { theme } from "../../themes";
import Icon from "react-native-vector-icons/FontAwesome";

export const WrapperCustomFormSenha = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(15)};

  position: fixed;
  top: ${theme.size(-130)};
`;
export const ContentCustomFormSenha = styled.View`
  width: 100%;
  height: auto;
  background: ${theme.colors.cinzaEscuro};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(15)};

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FrameCustomFormSenha = styled.Image`
  width: ${theme.size(100)};
  height: ${theme.size(100)};
  position: absolute;
  top: ${theme.size(-100)};
  left: ${theme.size(20)};
`;
export const MessageCustomFormSenha = styled.View`
  width: auto;
  background: ${theme.colors.Azul};
  border-top-left-radius: ${theme.size(6)};
  border-top-right-radius: ${theme.size(6)};
  border-bottom-right-radius: ${theme.size(6)};

  justify-content: center;
  align-items: center;
  padding: ${theme.size(10)};
  position: absolute;
  top: ${theme.size(-130)};
  left: ${theme.size(130)};
`;
export const InnerMessageCustomFormSenha = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(13)};
  line-height: ${theme.size(20)};
  font-weight: 600;
  text-align: center;
`;
export const ViewCustomFormSenha = styled.View`
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlockFieldsCustomFormSenha = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(8)};

  border: solid ${theme.colors.Azul} ${theme.size(0.9)};
  border-radius: ${theme.size(5)};

  border: solid ${theme.colors.Azul} ${theme.size(0.9)};
  border-radius: ${theme.size(5)};

  border-left-width: ${theme.size(16)};
  border-left-color: ${theme.colors.Azul};
`;
export const IconFieldCustomFormSenha = styled(Icon)`
  font-size: ${theme.size(16)};
  line-height: ${theme.size(24)};
  margin-right: ${theme.size(10)};
  color: ${theme.colors.Azul};
`;
export const InnerFieldCustomFormSenha = styled.TextInput`
  flex: 1;
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: left;
`;
export const HandlePasswordCustomFormSenha = styled.TouchableOpacity`
  width: auto;
  margin: 0;
`;
export const DividingLineCustomFormSenha = styled.View`
  padding: ${theme.size(8)};
`;
