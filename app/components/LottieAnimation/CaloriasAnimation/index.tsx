import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { WrapperLottieView } from "./styles";

export const CaloriasAnimation = () => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    const animation = animationRef.current;

    if (animation) {
      const startAnimation = () => {
        animation.play();
      };

      const delay = setTimeout(startAnimation, 2);

      return () => {
        animation.reset();
        clearTimeout(delay);
      };
    }
  }, []);
  return (
    <WrapperLottieView
      loop={true}
      autoPlay={true}
      ref={animationRef}
      source={require("..//..//..//assets/Lottie_Json/CalorieFire.json")}
    />
  );
};
