import styled from "styled-components/native";

import { theme } from "../../../../themes";

interface PropsRadio {
  selected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RadioOuterCircle = styled.View<{ selected: boolean }>`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ selected }: PropsRadio) => (selected ? "#007bff" : "#000")};
  justify-content: center;
  align-items: center;
`;

export const RadioInnerCircle = styled.View<{ selected: boolean }>`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ selected }: PropsRadio) => (selected ? "#007bff" : "transparent")};
`;

export const RadioText = styled.Text`
  margin-left: 8px;
`;
