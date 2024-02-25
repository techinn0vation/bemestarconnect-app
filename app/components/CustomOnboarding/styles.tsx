import styled from "styled-components/native";
import { theme } from "../../themes";
import { Link } from "expo-router";

export const WrapperFrameOnborading = styled.View``;

export const FrameOnboarding = styled.Image`
  width: ${theme.size(230)};
  height: ${theme.size(230)};
`;
export const ViewOnboarding = styled.View`
  width: auto;
  justify-content: center;
  align-items: center; 
`;
export const ButtonLinkOnboarding = styled(Link)`
  width: ${theme.size(100)};
  padding: ${theme.size(10)};
  border-radius: ${theme.size(5)};
  background: ${theme.colors.Azul};

  color: ${theme.colors.Branco};
  font-size: ${theme.size(13.5)};
  line-height: ${theme.size(20.25)};
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;
