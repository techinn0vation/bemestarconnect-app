import * as Progress from "react-native-progress";

import {
  BlockCustomProgress,
  ContentCustomProgress,
  SubTextCustomProgress,
  WrapperCustomProgress,
} from "./styles";

import { dimensions } from "./stylesConfig";

export default function CustomProgress() {
  return (
    <WrapperCustomProgress>
      <ContentCustomProgress>
        <Progress.Bar
          width={dimensions.width}
          height={dimensions.height}
          progress={0.2}
        />
        <BlockCustomProgress>
          <SubTextCustomProgress>80 kg</SubTextCustomProgress>
          <SubTextCustomProgress>75 kg</SubTextCustomProgress>
        </BlockCustomProgress>
      </ContentCustomProgress>
    </WrapperCustomProgress>
  );
}
