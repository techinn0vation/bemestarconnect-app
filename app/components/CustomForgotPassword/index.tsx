import { useState } from "react";
import { theme } from "../../themes";

import {
  BlockCustomForgotPassword,
  ContentCustomForgotPassword,
  FrameCustomForgotPassword,
  HandleHideCustomForgotPassword,
  HeadlineCustomForgotPassword,
  IconHideCustomForgotPassword,
  InnerBlockCustomForgotPassword,
  InputFieldCustomForgotPassword,
  SpaceCustomForgotPassword,
  TextHeadlineCustomForgotPassword,
  WrapperCustomForgotPassword,
} from "./styles";

import CustomButton from "../shared/CustomButton";
import { useRouter } from "expo-router";

export default function CustomForgotPassword() {
  // Função para mostrar/esconder senha
  const [createPassword, setCreatePassword] = useState(false);

  const handleCreatePassword = () => {
    setCreatePassword(!createPassword);
  };

  // Função para mostrar/esconder senha
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  // Função para redirecionar usuario
  const router = useRouter();

  const handleReturnLogin = () => {
    router.push("/screens/ForgotPassword/WarningForgotPassword");
  };

  return (
    <WrapperCustomForgotPassword>
      <FrameCustomForgotPassword
        resizeMode="contain"
        source={require("../../assets/img/Asset-A010.png")}
      />
      <ContentCustomForgotPassword>
        {/*  */}
        <SpaceCustomForgotPassword />
        {/*  */}

        <HeadlineCustomForgotPassword>
          <TextHeadlineCustomForgotPassword>
            Não se preocupe! Vamos criar outra!
          </TextHeadlineCustomForgotPassword>
        </HeadlineCustomForgotPassword>
        {/*  */}
        <SpaceCustomForgotPassword />
        {/*  */}
        <BlockCustomForgotPassword>
          <InnerBlockCustomForgotPassword>
            <InputFieldCustomForgotPassword
              placeholder="Digite seu e-mail"
              placeholderTextColor={theme.colors.Cinza}
            />
          </InnerBlockCustomForgotPassword>

          {/*  */}
          <SpaceCustomForgotPassword />
          {/*  */}
          <InnerBlockCustomForgotPassword>
            <InputFieldCustomForgotPassword
              placeholder="Digite sua nova senha"
              placeholderTextColor={theme.colors.Cinza}
            />

            <HandleHideCustomForgotPassword onPress={handleCreatePassword}>
              <IconHideCustomForgotPassword
                name={createPassword ? "eye" : "eye-slash"}
              />
            </HandleHideCustomForgotPassword>
          </InnerBlockCustomForgotPassword>
          {/*  */}
          <SpaceCustomForgotPassword />
          {/*  */}
          <InnerBlockCustomForgotPassword>
            <InputFieldCustomForgotPassword
              placeholder="Confirme sua senha"
              placeholderTextColor={theme.colors.Cinza}
            />

            <HandleHideCustomForgotPassword onPress={handleConfirmPassword}>
              <IconHideCustomForgotPassword
                name={confirmPassword ? "eye" : "eye-slash"}
              />
            </HandleHideCustomForgotPassword>
          </InnerBlockCustomForgotPassword>
          {/*  */}
          <SpaceCustomForgotPassword />
          {/*  */}

          <CustomButton onPress={handleReturnLogin} text="Confirmar" />
        </BlockCustomForgotPassword>
      </ContentCustomForgotPassword>
    </WrapperCustomForgotPassword>
  );
}
