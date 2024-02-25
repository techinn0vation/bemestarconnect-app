import CustomFormCadastro from "../../components/CustomFormCadastro";

import {
  SafeAreaExternal,
  WrapperExternal,
  FrameBubbleExternal,
} from "../../components/sharedStyles/stylesExternal";

export default function Cadastro() {
  return (
    <SafeAreaExternal>
      <WrapperExternal showsVerticalScrollIndicator={false}>
        <FrameBubbleExternal
          resizeMode="stretch"
          source={require("..//..//assets/images/Bubble.png")}
        />
        <CustomFormCadastro />
      </WrapperExternal>
    </SafeAreaExternal>
  );
}
