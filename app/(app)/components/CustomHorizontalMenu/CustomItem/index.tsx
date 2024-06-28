import { ImageSourcePropType } from "react-native";
import { useRouter } from "expo-router";
import {
  ButtonCustomItem,
  InnerButtonItem,
  FrameButtonItem,
  SubTextButtonItem,
} from "./styles";

interface PropsCustomItem {
  text: string;
  destination: string;
  imageSource?: ImageSourcePropType;
}

export default function CustomItem({
  text,
  destination,
  imageSource,
}: PropsCustomItem) {
  const router = useRouter();

  const handleLink = () => {
    router.push(destination);
  };
  return (
    <ButtonCustomItem onPress={handleLink}>
      <InnerButtonItem>
        <FrameButtonItem resizeMode="contain" source={imageSource} />
      </InnerButtonItem>
      <SubTextButtonItem>{text}</SubTextButtonItem>
    </ButtonCustomItem>
  );
}
