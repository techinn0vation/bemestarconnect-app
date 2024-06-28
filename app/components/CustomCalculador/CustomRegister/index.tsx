import { useState } from "react";
import { theme } from "../../../themes";

import {
  BlockCustomRegister,
  ContentCustomRegister,
  FrameCustomRegister,
  HandleHideCustomRegister,
  HeadlineCustomRegister,
  IconHideCustomRegister,
  InnerBlockCustomRegister,
  InputFieldCustomRegister,
  SpaceCustomRegister,
  TextHeadlineCustomRegister,
  WrapperCustomRegister,
} from "./styles";

import CustomButton from "../../shared/CustomButton";
import { useRouter } from "expo-router";

export default function CustomRegister() {
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
    router.push("/screens/Calculador/WarningRegister");
  };

  return (
    <WrapperCustomRegister>
      <FrameCustomRegister
        resizeMode="contain"
        source={require("../../../assets/img/Asset-A09.png")}
      />
      <ContentCustomRegister>
        {/*  */}
        <SpaceCustomRegister />
        {/*  */}

        <HeadlineCustomRegister>
          <TextHeadlineCustomRegister>
            Agora vamos fazer o seu cadastro, ok? Preencha os campos abaixo.
          </TextHeadlineCustomRegister>
        </HeadlineCustomRegister>
        {/*  */}
        <SpaceCustomRegister />
        {/*  */}
        <BlockCustomRegister>
        <InnerBlockCustomRegister>
            <InputFieldCustomRegister
              placeholder="Digite seu nome completo"
              placeholderTextColor={theme.colors.Cinza}
            />
          </InnerBlockCustomRegister>

          {/*  */}
          <SpaceCustomRegister />
          {/*  */}
          <InnerBlockCustomRegister>
            <InputFieldCustomRegister
              placeholder="Digite seu e-mail"
              placeholderTextColor={theme.colors.Cinza}
            />
          </InnerBlockCustomRegister>

          {/*  */}
          <SpaceCustomRegister />
          {/*  */}
          <InnerBlockCustomRegister>
            <InputFieldCustomRegister
              placeholder="Digite sua nova senha"
              placeholderTextColor={theme.colors.Cinza}
            />

            <HandleHideCustomRegister onPress={handleCreatePassword}>
              <IconHideCustomRegister
                name={createPassword ? "eye" : "eye-slash"}
              />
            </HandleHideCustomRegister>
          </InnerBlockCustomRegister>
          {/*  */}
          <SpaceCustomRegister />
          {/*  */}
          <InnerBlockCustomRegister>
            <InputFieldCustomRegister
              placeholder="Confirme sua senha"
              placeholderTextColor={theme.colors.Cinza}
            />

            <HandleHideCustomRegister onPress={handleConfirmPassword}>
              <IconHideCustomRegister
                name={confirmPassword ? "eye" : "eye-slash"}
              />
            </HandleHideCustomRegister>
          </InnerBlockCustomRegister>
          {/*  */}
          <SpaceCustomRegister />
          {/*  */}

          <CustomButton onPress={handleReturnLogin} text="Confirmar" />
        </BlockCustomRegister>
      </ContentCustomRegister>
    </WrapperCustomRegister>
  );
}
