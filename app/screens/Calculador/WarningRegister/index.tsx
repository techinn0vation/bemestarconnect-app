import CustomWarning from "../../../components/CustomWarning";
import { useRouter } from "expo-router";

import {
  ContentLayout,
  WrapperLayout,
} from "../../../layouts/CommonLayout/styles";

export default function WarningRegister() {
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
          subtitle="Seu cadastro foi feito com sucesso! Agora você já pode fazer o seu login!"
          buttonText="Login"
          onPress={handleReturnLogin}
          imageSource={require("../../../assets/img/Asset-A010.png")}
        />
      </ContentLayout>
    </WrapperLayout>
  );
}
