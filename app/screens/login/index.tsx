import {
  FrameBubbleExternal,
  SafeAreaExternal,
  WrapperExternal,
} from "../../components/sharedStyles/stylesExternal";

import CustomFormLogin from "../../components/CustomFormLogin";

export default function Login() {
  return (
    <SafeAreaExternal>
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
