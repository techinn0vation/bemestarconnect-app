import CustomForgotPassword from "../../components/CustomForgotPassword";

import {
  ContentLayout,
  WrapperLayout,
} from "../../layouts/CommonLayout/styles";

export default function ForgotPassword() {
  return (
    <WrapperLayout>
      <ContentLayout>
        <CustomForgotPassword />
      </ContentLayout>
    </WrapperLayout>
  );
}
