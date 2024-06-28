import styled from "styled-components/native";
import { theme } from "../../themes";

export const WrapperCustomWarning = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
})`
  width: 100%;
  padding: ${theme.size(16)};
`;
export const ContentCustomWarning = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(10)};
`;
export const BlockCustomWarning = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleCustomWarning = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
`;
export const TextCustomWarning = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 500;
  line-height: ${theme.size(21)};
  text-align: center;
`;

export const TagSpaceCustomWarning = styled.View`
  padding: ${theme.size(8)};
`;
export const ButtonCustomWarning = styled.TouchableOpacity`
  width: auto;

  padding-top: ${theme.size(12)};
  padding-left: ${theme.size(20)};
  padding-bottom: ${theme.size(12)};
  padding-right: ${theme.size(20)};

  border-radius: ${theme.size(5)};
  background: ${theme.colors.Azul};
  justify-content: center;
  align-items: center;

  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
  text-transform: capitalize;
`;
export const TextButtonCustomWarning = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 700;
  line-height: ${theme.size(21)};
  text-align: center;
`;

export const FrameCustomWarning = styled.Image`
  width: ${theme.size(125)};
  height: ${theme.size(125)};
`;
