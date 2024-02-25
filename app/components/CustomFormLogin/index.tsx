import { useState } from "react";
import { theme } from "../../themes";

import {
  ContentLogin,
  ViewLogin,
  FrameLogo,
  DividingLine,
  ContentFields,
  BlockFields,
  IconField,
  InnerFieldLogin,
  HandlePassword,
  ButtonLogin,
  TextButtonLogin,
  FooterLogin,
  TextFooterLogin,
  SubLinkFooter,
} from "./styles";

// import CustomButton from "../CustomButton";

export default function CustomFormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContentLogin>
      <ViewLogin>
        <FrameLogo
          resizeMode="contain"
          source={require("..//..//assets/images/Logo.png")}
        />
        <DividingLine />
        <ContentFields>
          <BlockFields>
            <IconField name="user" />
            <InnerFieldLogin
              placeholder="Digite seu e-mail"
              placeholderTextColor={theme.colors.CinzaClaro}
            />
          </BlockFields>
          <DividingLine />
          <BlockFields>
            <IconField name="lock" />
            <InnerFieldLogin
              placeholder="Digite sua senha"
              placeholderTextColor={theme.colors.CinzaClaro}
              secureTextEntry={!showPassword}
            />
            <HandlePassword onPress={handleTogglePassword}>
              <IconField name={showPassword ? "eye" : "eye-slash"} />
            </HandlePassword>
          </BlockFields>
          <DividingLine />

          {/* Botão comentado para testar telas em (app), não utilizavel! */}
          {/* <CustomButton href="/(app)/screens/principal" text="login" /> */}
          {/* Botão comentado para testar telas em (app), não utilizavel! */}

          <ButtonLogin>
            <TextButtonLogin>entrar</TextButtonLogin>
          </ButtonLogin>
          <DividingLine />
          <FooterLogin>
            <TextFooterLogin>Ainda não tem uma conta?</TextFooterLogin>
            <SubLinkFooter href="/screens/steps">cadastre-se</SubLinkFooter>
            <DividingLine />
            <SubLinkFooter href="/screens/esqueceuSenha">
              Esqueceu a senha ?
            </SubLinkFooter>
            <DividingLine />
          </FooterLogin>
        </ContentFields>
      </ViewLogin>
    </ContentLogin>
  );
}
