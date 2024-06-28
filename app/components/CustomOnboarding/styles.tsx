import styled from "styled-components/native";
import { theme } from "../../themes";

export const ScrollCustomOnboarding = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "start",
    alignItems: "start",
    flexGrow: 1,
  },
})``;

export const WrapperCustomOnboarding = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentCustomOnboarding = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(16)};
`;
export const TitleOnboarding = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(16)};
  line-height: ${theme.size(24)};
  font-weight: 700;
  text-align: center;
`;
export const SubTitleOnboarding = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(13)};
  line-height: ${theme.size(19.5)};
  font-weight: 600;
  text-align: center;
`;
export const FrameOnboarding = styled.Image`
  width: ${theme.size(230)};
  height: ${theme.size(230)};
`;
export const SpaceOnboarding = styled.View`
  padding: ${theme.size(6)};
`;
export const WrapperCustomButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.size(16)};
`;
