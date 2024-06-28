import {
  BlockInputFields,
  ButtonCustomLogin,
  ContentCustomLogin,
  FooterCustomLogin,
  HandleHideCustomLogin,
  IconHideCustomLogin,
  InnerBlockInputFields,
  InnerFooterCustomLogin,
  InnerInputField,
  LinkFooterCustomLogin,
  LogoBranding,
  SpaceCustomLogin,
  TextButtonCustomLogin,
  TextFooterCustomLogin,
  WrapperCustomLogin,
} from "./styles";

import { useState } from "react";
import { theme } from "../../themes";
import { useRouter } from "expo-router";

export default function CustomLogin() {
  // Função para mostrar/esconder senha
  const [showPassword, setShowPassword] = useState(false);

  const handleHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // Função para redirecionar usuario
  const router = useRouter();

  const handleLogin = () => {
    router.push("/screens/Dashboard");
  };

  return (
    <WrapperCustomLogin>
      <ContentCustomLogin>
        <LogoBranding
          resizeMode="contain"
          source={require("../../assets/img/Logo.png")}
        />
        {/* Bloco de credenciais */}
        <BlockInputFields>
          <InnerBlockInputFields>
            <InnerInputField
              placeholder="Digite seu e-mail"
              placeholderTextColor={theme.colors.Cinza}
            />
          </InnerBlockInputFields>
          {/*  */}
          <SpaceCustomLogin />
          {/*  */}
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
        {/* Bloco de credenciais */}
        {/*  */}
        <SpaceCustomLogin />
        {/*  */}
        <ButtonCustomLogin onPress={handleLogin}>
          <TextButtonCustomLogin>entrar</TextButtonCustomLogin>
        </ButtonCustomLogin>
        {/*  */}
        <SpaceCustomLogin />
        {/*  */}
        <FooterCustomLogin>
          <InnerFooterCustomLogin>
            <TextFooterCustomLogin>
              Ainda não tem uma conta?
            </TextFooterCustomLogin>
            <LinkFooterCustomLogin href="screens/Calculador">Cadastre-se</LinkFooterCustomLogin>
          </InnerFooterCustomLogin>
          {/*  */}
          <InnerFooterCustomLogin>
            <LinkFooterCustomLogin href="screens/ForgotPassword">
              Esqueceu a senha?
            </LinkFooterCustomLogin>
          </InnerFooterCustomLogin>
        </FooterCustomLogin>
      </ContentCustomLogin>
    </WrapperCustomLogin>
  );
}
