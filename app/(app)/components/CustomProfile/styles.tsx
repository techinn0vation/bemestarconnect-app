import styled from "styled-components/native";
import { theme } from "../../../themes";
import Icon from "react-native-vector-icons/FontAwesome5";

export const WrapperCustomProfile = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentCustomProfile = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${theme.size(10)};
  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(5)};

  position: relative;
`;
export const FrameCustomProfile = styled.Image`
  width: ${theme.size(55)};
  height: ${theme.size(55)};
  border: solid ${theme.colors.Azul} ${theme.size(4)};
  border-radius: ${theme.size(100)};
`;
export const TitleCustomProfile = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(16)};
  font-weight: 600;
  line-height: ${theme.size(24)};
  text-align: center;
  text-transform: capitalize;
`;
export const SubTextCustomProfile = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
  text-transform: capitalize;
`;

export const SpaceCustomProfile = styled.View`
  padding: ${theme.size(6)};
`;
