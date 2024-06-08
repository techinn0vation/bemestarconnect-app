import { Dimensions } from "react-native";

const baseFontSize = 1;

const size = (value: number) =>
  `${value / baseFontSize / Dimensions.get("window").fontScale}px`;

export const theme = {
  size,
  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
  colors: {
    Azul: "#0D99FF",
    Preto: "#121619",
    Amarelo: "#FFC727",

    PretoAzulado: "#263238",
    Branco: "#FFFFFF",
    Cinza: "#E0E0E0",
  },
};
