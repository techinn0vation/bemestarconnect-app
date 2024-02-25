import {
  BlockFieldsCustomFormSenha,
  ContentCustomFormSenha,
  DividingLineCustomFormSenha,
  FrameCustomFormSenha,
  HandlePasswordCustomFormSenha,
  IconFieldCustomFormSenha,
  InnerFieldCustomFormSenha,
  InnerMessageCustomFormSenha,
  MessageCustomFormSenha,
  ViewCustomFormSenha,
  WrapperCustomFormSenha,
} from "./styles";

import { theme } from "../../themes";
import { useState } from "react";
import CustomButton from "../CustomButton";

export default function CustomFormSenha() {
  const [primaryPassword, setPrimaryPassword] = useState(false);

  const handleTogglePrimary = () => {
    setPrimaryPassword(!primaryPassword);
  };

  return (
    <WrapperCustomFormSenha>
      <ContentCustomFormSenha>
        <FrameCustomFormSenha
          resizeMode="contain"
          source={require("..//..//assets/images/Password.png")}
        />
        <MessageCustomFormSenha>
          <InnerMessageCustomFormSenha>
            Bora criar uma nova!
          </InnerMessageCustomFormSenha>
        </MessageCustomFormSenha>

        <ViewCustomFormSenha>
          <BlockFieldsCustomFormSenha>
            <InnerFieldCustomFormSenha
              placeholder="Digite seu e-mail"
              placeholderTextColor={theme.colors.CinzaClaro}
            />
            <IconFieldCustomFormSenha name="user" />
          </BlockFieldsCustomFormSenha>

          <DividingLineCustomFormSenha />

          <BlockFieldsCustomFormSenha>
            <InnerFieldCustomFormSenha
              placeholder="Digite sua nova senha"
              placeholderTextColor={theme.colors.CinzaClaro}
              secureTextEntry={!primaryPassword}
            />
            <HandlePasswordCustomFormSenha onPress={handleTogglePrimary}>
              <IconFieldCustomFormSenha
                name={primaryPassword ? "eye" : "eye-slash"}
              />
            </HandlePasswordCustomFormSenha>
          </BlockFieldsCustomFormSenha>

          <DividingLineCustomFormSenha />

          <CustomButton href="/components/CustomFormSenha/SavedSenha" text="salvar" />
        </ViewCustomFormSenha>
      </ContentCustomFormSenha>
    </WrapperCustomFormSenha>
  );
}
