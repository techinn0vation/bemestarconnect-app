import styled from "styled-components/native";
import { theme } from "../../themes";

export const WrapperOnboarding = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
`;
export const TitleOnboarding = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(18)};
  line-height: ${theme.size(27)};
  font-weight: 700;
  text-align: center;
`;
export const DescriptionOnboarding = styled.Text`
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
  padding: ${theme.size(10)};
`;
