import CustomWarning from "../../../components/CustomWarning";
import { useRouter } from "expo-router";

import {
  ContentLayout,
  WrapperLayout,
} from "../../../layouts/CommonLayout/styles";

export default function WarningForgotPassword() {
  // Função para redirecionar usuario
  const router = useRouter();

  const handleReturnLogin = () => {
    router.push("/screens/Login");
  };

  return (
    <WrapperLayout>
      <ContentLayout>
        <CustomWarning
          title="Protinho...!"
          subtitle="Sua senha foi redefinida com sucesso! Agora você já pode fazer o seu login!"
          buttonText="Login"
          onPress={handleReturnLogin}
          imageSource={require("../../../assets/img/Asset-A010.png")}
        />
      </ContentLayout>
    </WrapperLayout>
  );
}
