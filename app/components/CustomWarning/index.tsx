import { PropsWarning } from "./propsWarning";
import {
  BlockCustomWarning,
  ButtonCustomWarning,
  ContentCustomWarning,
  FrameCustomWarning,
  TagSpaceCustomWarning,
  TextButtonCustomWarning,
  TextCustomWarning,
  TitleCustomWarning,
  WrapperCustomWarning,
} from "./styles";

export default function CustomWarning({
  title,
  subtitle,
  buttonText,
  imageSource,
  onPress,
  showButton = true,
}: PropsWarning) {
  return (
    <WrapperCustomWarning>
      <ContentCustomWarning>
        <BlockCustomWarning>
          <TagSpaceCustomWarning />
          <TagSpaceCustomWarning />

          <TitleCustomWarning>{title}</TitleCustomWarning>

          <TagSpaceCustomWarning />

          <TextCustomWarning>{subtitle}</TextCustomWarning>

          <TagSpaceCustomWarning />
        </BlockCustomWarning>

        <TagSpaceCustomWarning />

        <FrameCustomWarning resizeMode="contain" source={imageSource} />

        <TagSpaceCustomWarning />
        <TagSpaceCustomWarning />
        {showButton && (
          <ButtonCustomWarning onPress={onPress}>
            <TextButtonCustomWarning>{buttonText}</TextButtonCustomWarning>
          </ButtonCustomWarning>
        )}
        <TagSpaceCustomWarning />
        <TagSpaceCustomWarning />

      </ContentCustomWarning>
    </WrapperCustomWarning>
  );
}
