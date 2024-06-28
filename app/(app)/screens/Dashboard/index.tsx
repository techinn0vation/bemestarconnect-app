import {
  ContentLayout,
  WrapperLayout,
} from "../../../layouts/CommonLayout/styles";

import CustomDashboard from "../../components/CustomDashboard";

export default function Dashboard() {
  return (
    <WrapperLayout>
      <ContentLayout>
        <CustomDashboard />
      </ContentLayout>
    </WrapperLayout>
  );
}
