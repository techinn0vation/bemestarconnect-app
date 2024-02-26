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
    Amarelo: "#FFC727",
    Branco: "#FFFFFF",
    AzulAcinzentado: "#22272C",
    cinzaEscuro: "#37474F",
    CinzaClaro: "#EEEEEE",
    Preto: "#121619",
    Opacity: "rgba(0,0,0,0.8)",
  },
};
