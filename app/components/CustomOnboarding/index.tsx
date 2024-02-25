import { FrameOnboarding, WrapperFrameOnborading } from "./styles";
import { ImageSourcePropType } from "react-native";

interface CustomOnboardingProps {
  imageSource: ImageSourcePropType;
}

export default function CustomOnboarding({
  imageSource,
}: CustomOnboardingProps) {
  return (
    <WrapperFrameOnborading>
      <FrameOnboarding resizeMode="stretch" source={imageSource} />
    </WrapperFrameOnborading>
  );
}
