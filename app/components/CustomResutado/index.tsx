import CustomButton from "../CustomButton";
import { Confetti } from "../Lottie/Confetti";
import {
  BlockCustomResposta,
  ContentCustomResposta,
  DividingLineResposta,
  FrameCustomResposta,
  InnerMessageCustomResposta,
  MessageCustomResposta,
  TextCustomResposta,
  WrapperCustomResposta,
} from "./styles";

interface PorpResposta {
  textSlogan: string;
  animationLottie: any;
  textResposta: string;
  textMotivacao: string;
}

export default function CustomResposta({
  textSlogan,
  animationLottie,
  textResposta,
  textMotivacao,
}: PorpResposta) {
  return (
    <WrapperCustomResposta>
      <Confetti />
      <FrameCustomResposta
        resizeMode="contain"
        source={require("..//..//assets/images/Happy.png")}
      />
      <MessageCustomResposta>
        <InnerMessageCustomResposta>parabéns...</InnerMessageCustomResposta>
      </MessageCustomResposta>

      <ContentCustomResposta>
        <BlockCustomResposta>
          <TextCustomResposta>{textSlogan}</TextCustomResposta>
        </BlockCustomResposta>

        <DividingLineResposta />
        <DividingLineResposta />
        <DividingLineResposta />

        <BlockCustomResposta>
          <TextCustomResposta>{animationLottie}</TextCustomResposta>
          <TextCustomResposta>{textResposta}</TextCustomResposta>
        </BlockCustomResposta>

        <DividingLineResposta />

        <BlockCustomResposta>
          <TextCustomResposta>{textMotivacao}</TextCustomResposta>
          <DividingLineResposta />
          <DividingLineResposta />
          <CustomButton href="/screens/cadastro" text="continuar" />
        </BlockCustomResposta>
      </ContentCustomResposta>
    </WrapperCustomResposta>
  );
}
