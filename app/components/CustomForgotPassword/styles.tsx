import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { theme } from "../../themes";

export const WrapperCustomForgotPassword = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
})`
  padding: ${theme.size(16)};
`;
export const ContentCustomForgotPassword = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(5)};
`;
export const BlockCustomForgotPassword = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnerBlockCustomForgotPassword = styled.View`
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
export const InputFieldCustomForgotPassword = styled.TextInput`
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
export const SpaceCustomForgotPassword = styled.View`
  padding: ${theme.size(8)};
`;
export const HandleHideCustomForgotPassword = styled.TouchableOpacity`
  width: auto;
  margin: 0;

  margin-right: ${theme.size(10)};
`;
export const IconHideCustomForgotPassword = styled(Icon)`
  color: ${theme.colors.Azul};
  font-size: ${theme.size(16)};
  line-height: ${theme.size(24)};
`;
export const HeadlineCustomForgotPassword = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextHeadlineCustomForgotPassword = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 500;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const FrameCustomForgotPassword = styled.Image`
  width: 100%;
  height: ${theme.size(130)};
`;
