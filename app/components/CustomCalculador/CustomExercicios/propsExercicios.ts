// import { ImageSourcePropType } from "react-native";

// export interface PropsExercicios {
//   title: string;
//   subtitle: string;
//   imageSource?: ImageSourcePropType;
//   onPress?: () => void;
// }

import { ImageSourcePropType } from "react-native";

export interface PropsExercicios {
  title: string;
  subtitle: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  onSelectActivity?: (level: string) => void; // Nova propriedade
}
