import styled from "styled-components/native";
import { theme } from "../../../../themes";

export const ButtonCustomItem = styled.TouchableOpacity`
  width: ${theme.size(200)};
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(5)};
  margin-right: ${theme.size(16)};
`;
export const SubTextButtonItem = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(12)};
  font-weight: 600;
  line-height: ${theme.size(18)};
  text-align: center;
  margin-right: ${theme.size(16)};
`;

export const InnerButtonItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: ${theme.size(16)};
  padding: ${theme.size(16)};

  background: ${theme.colors.PretoAzuladoClaro};
  border-top-left-radius: ${theme.size(5)};
  border-bottom-left-radius: ${theme.size(5)};
`;
export const FrameButtonItem = styled.Image`
  width: ${theme.size(35)};
  height: ${theme.size(35)};
`;
