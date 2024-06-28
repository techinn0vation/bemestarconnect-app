import styled from "styled-components/native";
import { theme } from "../../../themes";
import LottieView from "lottie-react-native";

export const WrapperLottieView = styled(LottieView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: ${theme.size(60)};
  height: ${theme.size(60)};
  margin-bottom: ${theme.size(6)};
`;
