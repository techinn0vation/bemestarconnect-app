import styled from "styled-components/native";
import { theme } from "../../../themes";

export const WrapperCustomProgress = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${theme.colors.PretoAzulado};
  border-radius: ${theme.size(10)};
  /* border: solid red 2px; */
`;
export const ContentCustomProgress = styled.View`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlockCustomProgress = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.size(6.5)};
`;

export const SubTextCustomProgress = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(13)};
  font-weight: 600;
  line-height: ${theme.size(21)};
  text-align: center;
  /* margin: ${theme.size(15)}; */
`;
