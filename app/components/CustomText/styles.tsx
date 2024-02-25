import styled from "styled-components/native";
import { theme } from "../../themes";

export const DisplayText = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  padding: ${theme.size(21)};
  text-align: center;
`;