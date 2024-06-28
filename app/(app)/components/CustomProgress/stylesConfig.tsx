// theme.ts
import { Dimensions } from "react-native";

const baseFontSize = 1;

export const size = (value: number) =>
  `${value / baseFontSize / Dimensions.get("window").fontScale}px`;

export const dimensions = {
  width: parseInt(size(295)),
  height: parseInt(size(8)),
};

export const themeBar = {
  size,
  dimensions,
};
