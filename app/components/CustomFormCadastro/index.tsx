import { theme } from "../../themes";
import { useState } from "react";
import CustomButton from "../CustomButton";

import {
  WrapperCustomFormSenha,
  ContentCustomFormSenha,
  FrameCustomFormSenha,
  MessageCustomFormSenha,
  InnerMessageCustomFormSenha,
  ViewCustomFormSenha,
  BlockFieldsCustomFormSenha,
  InnerFieldCustomFormSenha,
  IconFieldCustomFormSenha,
  DividingLineCustomFormSenha,
  HandlePasswordCustomFormSenha,
} from "../CustomFormSenha/styles";

export default function CustomFormCadastro() {
  const [primaryPassword, setPrimaryPassword] = useState(false);

  const handleTogglePassword = () => {
    setPrimaryPassword(!primaryPassword);
  };

  return (
    <WrapperCustomFormSenha>
      <ContentCustomFormSenha>
        <FrameCustomFormSenha
          resizeMode="contain"
          source={require("..//..//assets/images/Writing.png")}
        />
        <MessageCustomFormSenha>
          <InnerMessageCustomFormSenha>
            Bora se cadastrar?
          </InnerMessageCustomFormSenha>
        </MessageCustomFormSenha>

        <ViewCustomFormSenha>
          <BlockFieldsCustomFormSenha>
            <InnerFieldCustomFormSenha
              placeholder="Nome completo"
              placeholderTextColor={theme.colors.CinzaClaro}
            />
            <IconFieldCustomFormSenha name="user" />
          </BlockFieldsCustomFormSenha>
          <DividingLineCustomFormSenha />

          <BlockFieldsCustomFormSenha>
            <InnerFieldCustomFormSenha
              placeholder="E-mail"
              placeholderTextColor={theme.colors.CinzaClaro}
            />
            <IconFieldCustomFormSenha name="user" />
          </BlockFieldsCustomFormSenha>

          <DividingLineCustomFormSenha />

          <BlockFieldsCustomFormSenha>
            <InnerFieldCustomFormSenha
              placeholder="Senha"
              placeholderTextColor={theme.colors.CinzaClaro}
              secureTextEntry={!primaryPassword}
            />
            <HandlePasswordCustomFormSenha onPress={handleTogglePassword}>
              <IconFieldCustomFormSenha
                name={primaryPassword ? "eye" : "eye-slash"}
              />
            </HandlePasswordCustomFormSenha>
          </BlockFieldsCustomFormSenha>

          <DividingLineCustomFormSenha />

          <CustomButton
            href="/components/CustomFormCadastro/SavedCadastro"
            text="salvar"
          />
        </ViewCustomFormSenha>
      </ContentCustomFormSenha>
    </WrapperCustomFormSenha>
  );
}
