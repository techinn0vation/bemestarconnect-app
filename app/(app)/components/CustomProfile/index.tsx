import CustomProgress from "../CustomProgress";
import {
  ContentCustomProfile,
  FrameCustomProfile,
  SpaceCustomProfile,
  SubTextCustomProfile,
  TitleCustomProfile,
  WrapperCustomProfile,
} from "./styles";

export default function CustomProfile() {
  return (
    <WrapperCustomProfile>
      <ContentCustomProfile>
        {/*  */}
        <SpaceCustomProfile />
        {/*  */}

        <FrameCustomProfile
          resizeMode="contain"
          source={require("../../../assets/img/Profile.png")}
        />
        {/*  */}
        <SpaceCustomProfile />
        {/*  */}
        <TitleCustomProfile>Olá, Gloria</TitleCustomProfile>
        {/*  */}
        <SpaceCustomProfile />
        {/*  */}
        <SubTextCustomProfile>progresso</SubTextCustomProfile>
        {/*  */}
        <SpaceCustomProfile />
        {/*  */}

        <CustomProgress />
      </ContentCustomProfile>
    </WrapperCustomProfile>
  );
}
