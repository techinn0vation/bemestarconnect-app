import CustomButton from "../../CustomButton";

import {
  WrapperSavedSenha,
  ContentSavedSenha,
  DividingLineSavedSenha,
  InnerMessageSaveSenha,
  FrameSaveSenha,
} from "../../CustomFormSenha/SavedSenha/styles";

import {
  SafeAreaExternal,
  WrapperExternal,
  FrameBubbleExternal,
} from "../../sharedStyles/stylesExternal";

export default function SavedCadastro() {
  return (
    <SafeAreaExternal>
      <WrapperExternal showsVerticalScrollIndicator={false}>
        <FrameBubbleExternal
          resizeMode="stretch"
          source={require("..//..//..//assets/images/Bubble.png")}
        />
        <WrapperSavedSenha>
          <ContentSavedSenha>
            <DividingLineSavedSenha />
            <DividingLineSavedSenha />

            <InnerMessageSaveSenha>
              Parabéns! Seu cadastro foi feito com sucesso!
            </InnerMessageSaveSenha>

            <DividingLineSavedSenha />
            <DividingLineSavedSenha />

            <FrameSaveSenha
              resizeMode="contain"
              source={require("..//..//..//assets/images/Filed.png")}
            />
            <DividingLineSavedSenha />
            <DividingLineSavedSenha />

            <CustomButton text="voltar" href="/screens/login" />
          </ContentSavedSenha>
        </WrapperSavedSenha>
      </WrapperExternal>
    </SafeAreaExternal>
  );
}
