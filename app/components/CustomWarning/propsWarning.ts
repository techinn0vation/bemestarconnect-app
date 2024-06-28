import { ImageSourcePropType } from "react-native";

export interface PropsWarning {
  title: string;
  subtitle: string;
  buttonText: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  showButton?: boolean;
}
