import styled from "styled-components/native";
import { theme } from "../../../themes";
import Icon from "react-native-vector-icons/FontAwesome6";

export const WrapperCustomDashboard = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "start",
    alignItems: "flex-end",
    flexGrow: 1,
  },
})`
  padding: ${theme.size(16)};
`;
export const ContentCustomDashboard = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlockCustomDashboard = styled.View`
  width: 100%;
  height: auto;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonCustomDashboard = styled.TouchableOpacity`
  width: auto;

  flex-direction: row;
  justify-content: start;
  align-items: start;
`;
export const IconCustomDashboard = styled(Icon)`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(23)};
  line-height: ${theme.size(23)};
`;
export const HighlighterCustoDashboard = styled.View`
  background: ${theme.colors.Vermelho};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(4)};
  width: ${theme.size(4)};
  height: ${theme.size(4)};
`;
export const SpaceCustomDashboard = styled.View`
  padding: ${theme.size(8)};
`;
