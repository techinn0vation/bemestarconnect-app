import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { theme } from "../../themes";
import { Link } from "expo-router";

export const WrapperCustomLogin = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
})`
  padding: ${theme.size(16)};
`;
export const ContentCustomLogin = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(5)};
`;
export const LogoBranding = styled.Image`
  width: 100%;
  height: ${theme.size(95)};
`;
export const BlockInputFields = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnerBlockInputFields = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(6.5)};

  border: solid ${theme.colors.Azul} ${theme.size(1.2)};
  border-radius: ${theme.size(5)};

  border-left-width: ${theme.size(20)};
  border-left-color: ${theme.colors.Azul};
`;
export const InnerInputField = styled.TextInput`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: left;
`;
export const SpaceCustomLogin = styled.View`
  padding: ${theme.size(8)};
`;
export const HandleHideCustomLogin = styled.TouchableOpacity`
  width: auto;
  margin: 0;

  margin-right: ${theme.size(10)};
`;
export const IconHideCustomLogin = styled(Icon)`
  color: ${theme.colors.Azul};
  font-size: ${theme.size(16)};
  line-height: ${theme.size(24)};
`;
export const ButtonCustomLogin = styled.TouchableOpacity`
  width: 100%;

  padding-top: ${theme.size(12)};
  padding-bottom: ${theme.size(12)};

  border-radius: ${theme.size(5)};
  background: ${theme.colors.Azul};
  justify-content: center;
  align-items: center;

  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
  text-transform: capitalize;
`;
export const TextButtonCustomLogin = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 700;
  line-height: ${theme.size(21)};
  text-align: center;
  text-transform: capitalize;
`;
export const FooterCustomLogin = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnerFooterCustomLogin = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  margin-bottom: ${theme.size(3)};
  align-items: center;
  margin-bottom: ${theme.size(3)};
`;
export const TextFooterCustomLogin = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 500;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const LinkFooterCustomLogin = styled(Link)`
  color: ${theme.colors.Azul};
  font-size: ${theme.size(14)};
  font-weight: 500;
  line-height: ${theme.size(21)};
  text-align: center;
  margin-bottom: ${theme.size(14)};
`;
