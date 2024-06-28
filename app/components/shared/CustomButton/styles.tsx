import styled from "styled-components/native";
import { theme } from "../../../themes";

export const WrapperCustomButton = styled.TouchableOpacity`
  width: auto;
  background-color: ${theme.colors.Azul};
  padding-top: ${theme.size(10)};
  padding-right: ${theme.size(15)};
  padding-bottom: ${theme.size(10)};
  padding-left: ${theme.size(15)};
  border-radius: ${theme.size(5)};
`;
export const TextCustomButton = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  line-height: ${theme.size(21)};
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;
