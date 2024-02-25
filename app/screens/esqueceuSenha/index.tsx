import CustomFormSenha from "../../components/CustomFormSenha";
import {
  SafeAreaExternal,
  WrapperExternal,
  FrameBubbleExternal,
} from "../../components/sharedStyles/stylesExternal";

export default function EsqueceuSenha() {
  return (
    <SafeAreaExternal>
      <WrapperExternal showsVerticalScrollIndicator={false}>
        <FrameBubbleExternal
          resizeMode="stretch"
          source={require("..//..//assets/images/Bubble.png")}
        />
        <CustomFormSenha></CustomFormSenha>
      </WrapperExternal>
    </SafeAreaExternal>
  );
}
