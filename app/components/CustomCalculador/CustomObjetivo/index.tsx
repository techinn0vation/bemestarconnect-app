import { CaloriasAnimation } from "../../LottieAnimation/CaloriasAnimation";
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
  onPress,
}: PropsObjetivo) {
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
          <CaloriasAnimation />
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
