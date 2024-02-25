import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Link } from "expo-router";
import { theme } from "../../themes";

export const ContentLogin = styled.View`
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(15)};
`;
export const ViewLogin = styled.View`
  width: 100%;
  height: auto;
  background: ${theme.colors.cinzaEscuro};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(15)};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: ${theme.size(-275)};
`;
export const FrameLogo = styled.Image`
  width: ${theme.size(200)};
  height: ${theme.size(100)};
`;
export const ContentFields = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlockFields = styled.View`
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
export const IconField = styled(Icon)`
  font-size: ${theme.size(16)};
  line-height: ${theme.size(24)};
  margin-right: ${theme.size(10)};
  color: ${theme.colors.Azul};
`;
export const InnerFieldLogin = styled.TextInput`
  flex: 1;
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: left;
`;
export const HandlePassword = styled.TouchableOpacity`
  width: auto;
  margin: 0;
`;
export const ButtonLogin = styled.TouchableOpacity`
  width: 100%;
  padding: ${theme.size(10)};
  border-radius: ${theme.size(5)};
  background: ${theme.colors.Azul};
  justify-content: center;
  align-items: center;
`;
export const TextButtonLogin = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 700;
  line-height: ${theme.size(21)};
  text-align: center;
  text-transform: capitalize;
`;
export const FooterLogin = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TextFooterLogin = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 500;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const SubLinkFooter = styled(Link)`
  color: ${theme.colors.CinzaClaro};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const DividingLine = styled.View`
  padding: ${theme.size(8)};
`;
