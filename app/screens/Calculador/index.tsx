import CustomCalculador from "../../components/CustomCalculador";
import {
  ContentLayout,
  WrapperLayout,
} from "../../layouts/CommonLayout/styles";

export default function Calculador() {
  return (
    <WrapperLayout>
      <ContentLayout>
        <CustomCalculador />
      </ContentLayout>
    </WrapperLayout>
  );
}
