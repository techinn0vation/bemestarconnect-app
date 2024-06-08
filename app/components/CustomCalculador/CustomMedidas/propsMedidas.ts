import { ImageSourcePropType } from "react-native";

export interface PropsMedidas {
  title: string;
  subtitle: string;
  imageSource?: ImageSourcePropType;
  placeholder: string;
  tagName: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (value: string) => void;
}
