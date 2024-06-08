import { theme } from "../../../themes";
import { PropsMedidas } from "./propsMedidas";
import {
  BlockCustomMedidas,
  ButtonCustomMedidas,
  ContentCustomMedidas,
  FrameCustomMedidas,
  InnerBlockCustomMedidas,
  InputCustomMedidas,
  SpaceCustomMedidas,
  SubtitleCustomMedidas,
  TitleCustomMedidas,
  WrapperCustomMedidas,
} from "./styles";

export default function CustomMedidas({
  title,
  subtitle,
  imageSource,
  placeholder,
  tagName,
  value,
  onChangeText,
  onPress
}: PropsMedidas) {
  return (
    <WrapperCustomMedidas>
      <FrameCustomMedidas resizeMode="contain" source={imageSource} />
      <ContentCustomMedidas>
        {/*  */}
        <SpaceCustomMedidas />

        <TitleCustomMedidas>{title}</TitleCustomMedidas>
        <SpaceCustomMedidas />

        <SubtitleCustomMedidas>{subtitle}</SubtitleCustomMedidas>
        <SpaceCustomMedidas />
        <SpaceCustomMedidas />

        <BlockCustomMedidas>
          <InnerBlockCustomMedidas>
            <InputCustomMedidas
              placeholder={placeholder}
              placeholderTextColor={theme.colors.Cinza}
              value={value}
              onChangeText={onChangeText}
              keyboardType="numeric"
            />

            <SpaceCustomMedidas />
            <SubtitleCustomMedidas>{tagName}</SubtitleCustomMedidas>
          </InnerBlockCustomMedidas>
        </BlockCustomMedidas>
        <SpaceCustomMedidas />
        <SpaceCustomMedidas />

        <ButtonCustomMedidas onPress={onPress}>
          <SubtitleCustomMedidas>Proximo</SubtitleCustomMedidas>
        </ButtonCustomMedidas>
        <SpaceCustomMedidas />
        <SpaceCustomMedidas />

        {/*  */}
      </ContentCustomMedidas>
    </WrapperCustomMedidas>
  );
}
