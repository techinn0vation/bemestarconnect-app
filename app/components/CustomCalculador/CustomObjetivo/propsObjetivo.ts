import { ImageSourcePropType } from "react-native";

export interface PropsObjetivo {
  title: string;
  subtitle: string;
  resultados: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  // lottieAnimation?: JSX.Element;
}
