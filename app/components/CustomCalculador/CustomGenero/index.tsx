import { PropsGenero } from "./propsGenero";
import {
  BlockCustomGenero,
  ButtonCustomGenero,
  ButtonNextCustomGenero,
  ContentCustomGenero,
  FrameCustomGenero,
  SpaceCustomGenero,
  SubtitleCustomGenero,
  TitleCustomGenero,
  WrapperCustomGenero,
} from "./styles";

export default function CustomGenero({
  title,
  subtitle,
  imageSource,
  onPress,
  onSelectMasculino,
  onSelectFeminino,
  selected,
}: PropsGenero) {
  return (
    <WrapperCustomGenero>
      <FrameCustomGenero resizeMode="contain" source={imageSource} />
      <ContentCustomGenero>
        <SpaceCustomGenero />

        <TitleCustomGenero>{title}</TitleCustomGenero>
        <SpaceCustomGenero />

        <SubtitleCustomGenero>{subtitle}</SubtitleCustomGenero>

        <SpaceCustomGenero />
        <SpaceCustomGenero />

        <BlockCustomGenero>
          <ButtonCustomGenero onPress={onSelectMasculino} selected={selected}>
            <SubtitleCustomGenero>Masculino</SubtitleCustomGenero>
          </ButtonCustomGenero>

          <SpaceCustomGenero />

          <ButtonCustomGenero onPress={onSelectFeminino} selected={!selected}>
            <SubtitleCustomGenero>Feminino</SubtitleCustomGenero>
          </ButtonCustomGenero>
        </BlockCustomGenero>

        <SpaceCustomGenero />
        <SpaceCustomGenero />

        <ButtonNextCustomGenero onPress={onPress}>
          <SubtitleCustomGenero>Proximo</SubtitleCustomGenero>
        </ButtonNextCustomGenero>

        <SpaceCustomGenero />
        <SpaceCustomGenero />
      </ContentCustomGenero>
    </WrapperCustomGenero>
  );
}
