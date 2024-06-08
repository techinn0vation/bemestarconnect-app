import CustomLogin from "../../components/CustomLogin";
import {
  ContentLayout,
  WrapperLayout,
} from "../../layouts/CommonLayout/styles";

export default function Login() {
  return (
    <WrapperLayout>
      <ContentLayout>
        <CustomLogin />
      </ContentLayout>
    </WrapperLayout>
  );
}
