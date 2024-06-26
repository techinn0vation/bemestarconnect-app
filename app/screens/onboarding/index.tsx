import CustomOnboarding from "../../components/CustomOnboarding";
import {
  ContentLayout,
  WrapperLayout,
} from "../../layouts/CommonLayout/styles";

export default function Onboarding() {
  return (
    <WrapperLayout>
      <ContentLayout>
        <CustomOnboarding />
      </ContentLayout>
    </WrapperLayout>
  );
}
