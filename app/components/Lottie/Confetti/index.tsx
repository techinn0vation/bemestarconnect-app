import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { FrameConfetti } from "./styles";

export const Confetti = () => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    const animation = animationRef.current;

    if (animation) {
      animation.play();

      return () => {
        animation.reset();
      };
    }
  }, []);

  return (
    <FrameConfetti>
      <LottieView
        loop={false}
        autoPlay={false}
        ref={animationRef}
        source={require("..//..//..//assets/Lottie_Animation/Confetti.json")}
      />
    </FrameConfetti>
  );
};
