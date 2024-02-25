import styled from "styled-components/native";
import { theme } from "../../../themes";

export const FrameConfetti = styled.View`
  width: ${theme.size(485)};
  height: ${theme.size(310)};
  position: absolute;
  top: ${theme.size(-130)};
  z-index: 1;
`;
