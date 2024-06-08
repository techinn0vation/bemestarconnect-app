import React from "react";

import {
  DescriptionOnboarding,
  FrameOnboarding,
  SpaceOnboarding,
  TitleOnboarding,
  WrapperOnboarding,
} from "./styles";

import AppIntroSlider from "react-native-app-intro-slider";

import { Slide, slides } from "./slidesOnboarding";
import { useRouter } from "expo-router";

const CustomOnboarding = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: Slide }) => {
    return (
      <WrapperOnboarding>
        <TitleOnboarding>{item.title}</TitleOnboarding>
        <SpaceOnboarding />
        <FrameOnboarding resizeMode="contain" source={item.image} />
        <SpaceOnboarding />
        <DescriptionOnboarding>{item.description}</DescriptionOnboarding>
      </WrapperOnboarding>
    );
  };

  const onDone = () => {
    router.replace("/screens/Login");
  };

  return (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
  );
};

export default CustomOnboarding;
