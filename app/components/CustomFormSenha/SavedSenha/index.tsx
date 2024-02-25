import CustomButton from "../../CustomButton";

import {
  SafeAreaExternal,
  WrapperExternal,
  FrameBubbleExternal,
} from "../../sharedStyles/stylesExternal";

import {
  ContentSavedSenha,
  DividingLineSavedSenha,
  FrameSaveSenha,
  InnerMessageSaveSenha,
  WrapperSavedSenha,
} from "./styles";

export default function SavedSenha() {
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
              Parabéns! Sua senha foi redefinida com sucesso!
            </InnerMessageSaveSenha>

            <DividingLineSavedSenha />
            <DividingLineSavedSenha />

            <FrameSaveSenha
              resizeMode="contain"
              source={require("..//..//..//assets/images/Lock.png")}
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
