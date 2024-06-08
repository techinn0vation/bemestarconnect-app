import { ImageSourcePropType } from "react-native";

export interface PropsGenero {
    title: string;
    subtitle: string;
    imageSource?: ImageSourcePropType;
    onPress?: () => void
    onSelectMasculino: () => void;
    onSelectFeminino: () => void;
    selected: boolean;
  }