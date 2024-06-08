import { theme } from "../../themes";
import { useRouter } from "expo-router";

import {
  BlockInputFields,
  ButtonCustomLogin,
  ContentCustomLogin,
  FooterCustomLogin,
  HandleHideCustomLogin,
  IconHideCustomLogin,
  InnerBlockInputFields,
  InnerInputField,
  LinkFooterCustomLogin,
  LogoBranding,
  SpaceCustomLogin,
  TextButtonCustomLogin,
  TextFooterCustomLogin,
  WrapperCustomLogin,
} from "./styles";

import { useState } from "react";

export default function CustomLogin() {
  // Função para mostrar/esconder senha
  const [showPassword, setShowPassword] = useState(false);

  const handleHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // Função para redirecionar usuario
  const router = useRouter();

  const handleLogin = () => {
    router.push("/(app)/screens/Dashboard");
  };

  return (
    <WrapperCustomLogin>
      <ContentCustomLogin>
        <LogoBranding
          resizeMode="contain"
          source={require("../../assets/img/Logo.png")}
        />

        <SpaceCustomLogin />

        <BlockInputFields>
          <InnerBlockInputFields>
            <InnerInputField
              placeholder="Digite seu e-mail"
              placeholderTextColor={theme.colors.Cinza}
            />
          </InnerBlockInputFields>

          <SpaceCustomLogin />

          <InnerBlockInputFields>
            <InnerInputField
              placeholder="Digite sua senha"
              placeholderTextColor={theme.colors.Cinza}
            />

            <HandleHideCustomLogin onPress={handleHidePassword}>
              <IconHideCustomLogin name={showPassword ? "eye" : "eye-slash"} />
            </HandleHideCustomLogin>
          </InnerBlockInputFields>
        </BlockInputFields>

        <SpaceCustomLogin />

        <ButtonCustomLogin onPress={handleLogin}>
          <TextButtonCustomLogin>entrar</TextButtonCustomLogin>
        </ButtonCustomLogin>

        <SpaceCustomLogin />

        <FooterCustomLogin>
          <TextFooterCustomLogin>
            Ainda não tem uma conta?
          </TextFooterCustomLogin>

          <LinkFooterCustomLogin href="screens/Calculador">
            Cadastre-se
          </LinkFooterCustomLogin>
          <LinkFooterCustomLogin href="">
            Esqueceu sua senha?
          </LinkFooterCustomLogin>
        </FooterCustomLogin>
      </ContentCustomLogin>
    </WrapperCustomLogin>
  );
}
