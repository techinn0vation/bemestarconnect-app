import { Dimensions, ScrollView } from "react-native";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { slides } from "./slidesCustomOnboarding";

import {
  ContentCustomOnboarding,
  FrameOnboarding,
  ScrollCustomOnboarding,
  SpaceOnboarding,
  SubTitleOnboarding,
  TitleOnboarding,
  WrapperCustomButtons,
  WrapperCustomOnboarding,
} from "./styles";
import CustomButton from "../shared/CustomButton";

const { width: screenWidth } = Dimensions.get("window");

export default function CustomOnboarding() {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < slides.length) {
      scrollRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      scrollRef.current?.scrollTo({
        x: prevIndex * screenWidth,
        animated: true,
      });
      setCurrentIndex(prevIndex);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      x: currentIndex * screenWidth,
      animated: true,
    });
  }, [currentIndex]);

  // Função para redirecionar usuario
  const router = useRouter();

  const handleLogin = () => {
    router.push("/screens/Login");
  };

  return (
    <WrapperCustomOnboarding>
      <ScrollCustomOnboarding
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth}
        decelerationRate={0.9}
        pagingEnabled={true}
      >
        {slides.map((item, index) => (
          <ContentCustomOnboarding key={index} style={{ width: screenWidth }}>
            <FrameOnboarding resizeMode="contain" source={item.imageSlide} />
            <SpaceOnboarding />
            <TitleOnboarding>{item.title}</TitleOnboarding>
            <SpaceOnboarding />
            <SubTitleOnboarding>{item.subTitle}</SubTitleOnboarding>
          </ContentCustomOnboarding>
        ))}
      </ScrollCustomOnboarding>
      <WrapperCustomButtons>
        {currentIndex > 0 && (
          <CustomButton onPress={handlePrev} text="anterior" />
        )}
        <SpaceOnboarding />
        {currentIndex === slides.length - 1 ? (
          <CustomButton onPress={handleLogin} text="login" />
        ) : (
          <CustomButton onPress={handleNext} text="próximo" />
        )}
      </WrapperCustomButtons>
    </WrapperCustomOnboarding>
  );
}
