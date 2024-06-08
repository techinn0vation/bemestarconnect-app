import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../themes";

export const WrapperLayout = styled(SafeAreaView)`
  flex: 1;
  background: ${theme.colors.Azul};
`;
export const ContentLayout = styled(LinearGradient).attrs({
  colors: [theme.colors.Preto, theme.colors.Azul],
  start: { x: 0, y: 0.5 },
  end: { x: 0, y: 0 },
})`
  flex: 1;
`;
