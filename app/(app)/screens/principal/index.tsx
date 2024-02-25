import React from "react";
import CustomText from "../../../components/CustomText";

import {
  SafeAreaExternal,
  WrapperExternal,
  FrameBubbleExternal,
} from "../../../components/sharedStyles/stylesExternal";
import CustomButton from "../../../components/CustomButton";

export default function Principal() {
  return (
    <SafeAreaExternal>
      <WrapperExternal showsVerticalScrollIndicator={false}>
        <FrameBubbleExternal
          resizeMode="stretch"
          source={require("..//..//..//assets/images/Bubble.png")}
        />
        <CustomText text="Você está na tela interna!" />
        <CustomText text="Ainda em desenvolvimento :-)" />
        <CustomButton href="/screens/login" text="sair" />
      </WrapperExternal>
    </SafeAreaExternal>
  );
}
