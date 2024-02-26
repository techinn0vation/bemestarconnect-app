import { useState } from "react";
import CustomText from "../CustomText";
import { ImageSourcePropType } from "react-native";

import {
  ButtonCustomModal,
  ContentCustomModal,
  FrameCustomModal,
  TextBtCustomModal,
  WrapperCustomModal,
} from "./styles";

interface PropsTextModal {
  textModal: string;
  BtTextModal: string;
  imageSourceModal: ImageSourcePropType;
}

export default function CustomModal({
  textModal,
  BtTextModal,
  imageSourceModal,
}: PropsTextModal) {
  const [modalVisible, setModalVisible] = useState(true);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };

  if (!modalVisible) {
    return null;
  }

  return (
    <>
      {modalVisible && (
        <WrapperCustomModal onPress={handleToggleModal}>
          <ContentCustomModal>
            <FrameCustomModal resizeMode="contain" source={imageSourceModal} />
            <CustomText text={textModal} />
            <ButtonCustomModal onPress={handleToggleModal}>
              <TextBtCustomModal>{BtTextModal}</TextBtCustomModal>
            </ButtonCustomModal>
          </ContentCustomModal>
        </WrapperCustomModal>
      )}
    </>
  );
}

// Modal reutilizavel para retornar ao errar login por exemplo. Ainda em teste e desenvol...!
