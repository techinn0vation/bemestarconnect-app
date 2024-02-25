import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../themes";

export const SafeAreaExternal = styled(SafeAreaView)`
  flex: 1;
  background: ${theme.colors.AzulAcinzentado};
  justify-content: center;
  align-items: center;
`;
export const WrapperExternal = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "start",
    alignItems: "center",
  },
})`
  width: 100%;
  background: ${theme.colors.Preto};
`;
export const BubbleExternal = styled.View`
  width: 100%;
  height: auto;
  justify-content: start;
  align-items: center;
`;
export const FrameBubbleExternal = styled.Image`
  width: 100%;
  height: ${theme.size(360)};
`;
