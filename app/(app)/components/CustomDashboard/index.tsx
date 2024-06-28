import CustomHorizontalMenu from "../CustomHorizontalMenu";
import CustomProfile from "../CustomProfile";
import {
  BlockCustomDashboard,
  ButtonCustomDashboard,
  ContentCustomDashboard,
  HighlighterCustoDashboard,
  IconCustomDashboard,
  SpaceCustomDashboard,
  WrapperCustomDashboard,
} from "./styles";

export default function CustomDashboard() {
  return (
    <WrapperCustomDashboard>
      <BlockCustomDashboard>
        <ButtonCustomDashboard>
          <IconCustomDashboard name="gear" />
        </ButtonCustomDashboard>

        <ButtonCustomDashboard>
          <IconCustomDashboard name="bell" />
          <HighlighterCustoDashboard />
        </ButtonCustomDashboard>
      </BlockCustomDashboard>
      {/* Barra de espaçamento */}
      <SpaceCustomDashboard />
      {/* Barra de espaçamento */}
      {/* Barra de espaçamento */}
      <SpaceCustomDashboard />
      {/* Barra de espaçamento */}
      <ContentCustomDashboard>
        <CustomProfile />
        {/* Barra de espaçamento */}
        <SpaceCustomDashboard />
        {/* Barra de espaçamento */}

        <CustomHorizontalMenu />
      </ContentCustomDashboard>
    </WrapperCustomDashboard>
  );
}
