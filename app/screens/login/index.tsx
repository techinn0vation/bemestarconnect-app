import {
  FrameBubbleExternal,
  SafeAreaExternal,
  WrapperExternal,
} from "../../components/sharedStyles/stylesExternal";

import CustomFormLogin from "../../components/CustomFormLogin";
// import CustomModal from "../../components/CustomModal";

export default function Login() {
  return (
    <SafeAreaExternal>
      {/* Modal reutilizavel em teste*/}
      {/* <CustomModal
        textModal="Ooops! Parece que seu email ou senha estão incorretos. Por favor, tente novamente."
        BtTextModal="voltar"
        imageSourceModal={require("../../assets/images/Error.png")}
      /> */}
      {/* Modal reutilizavel em teste*/}
      <WrapperExternal showsVerticalScrollIndicator={false}>
        <FrameBubbleExternal
          resizeMode="stretch"
          source={require("..//..//assets/images/Bubble.png")}
        />
        <CustomFormLogin />
      </WrapperExternal>
    </SafeAreaExternal>
  );
}
