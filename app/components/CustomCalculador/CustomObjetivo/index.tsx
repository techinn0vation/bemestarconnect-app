import LottieAnimation from "../../LottieAnimation/CaloriasAnimation";
import { PropsObjetivo } from "./propsObjetivo";
import {
  BlockCustomObjetivo,
  ButtonCustomObjetivo,
  ContentCustomObjetivo,
  FrameCustomObjetivo,
  SpaceCustomObjetivo,
  SubtitleCustomObjetivo,
  TitleCustomObjetivo,
  WrapperCustomObjetivo,
} from "./styles";

export default function CustomObjetivo({
  title,
  subtitle,
  resultados,
  imageSource,
  // lottieAnimation,
  onPress,
}: PropsObjetivo) {
  const animationSource = require("..//..//..//assets/Lottie_Json/CalorieFire.json");
  return (
    <WrapperCustomObjetivo>
      <FrameCustomObjetivo resizeMode="contain" source={imageSource} />
      <ContentCustomObjetivo>
        {/*  */}
        <TitleCustomObjetivo>{title}</TitleCustomObjetivo>
        <SpaceCustomObjetivo />
        <SubtitleCustomObjetivo>{subtitle}</SubtitleCustomObjetivo>
        <SpaceCustomObjetivo />

        {/*  */}
        <BlockCustomObjetivo>
          {/* <Calorie /> */}
          <LottieAnimation source={animationSource} />
          <SubtitleCustomObjetivo></SubtitleCustomObjetivo>
          <SubtitleCustomObjetivo>{resultados}</SubtitleCustomObjetivo>
        </BlockCustomObjetivo>
        <SpaceCustomObjetivo />
        <ButtonCustomObjetivo onPress={onPress}>
          <SubtitleCustomObjetivo>Proximo</SubtitleCustomObjetivo>
        </ButtonCustomObjetivo>
        <SpaceCustomObjetivo />
      </ContentCustomObjetivo>
    </WrapperCustomObjetivo>
  );
}
