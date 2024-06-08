import styled from "styled-components/native";
import { theme } from "../../themes";

export const WrapperCustomCalculador = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
})`
  width: 100%;
  padding: ${theme.size(16)};
`;
