import Onboarding from "react-native-onboarding-swiper";

import { theme } from "../../themes";
import CustomText from "../../components/CustomText";
import CustomOnboarding from "../../components/CustomOnboarding";

import {
  ButtonLinkOnboarding,
  ViewOnboarding,
} from "../../components/CustomOnboarding/styles";

export default function OnboardingScreen() {
  return (
    <Onboarding
      showSkip={false}
      nextLabel="Próximo"
      showDone={false}
      pages={[
        {
          backgroundColor: `${theme.colors.Preto}`,
          image: (
            <CustomOnboarding
              imageSource={require("../../assets/images/Amico.png")}
            />
          ),
          title: (
            <CustomText
              text=" Transforme sua jornada de saúde com o nosso aplicativo!
              Nutricionistas e Personal Trainers estão à sua disposição das 8h
              às 18h para esclarecer todas as suas dúvidas."
            />
          ),
          subtitle: <CustomText text="" />,
        },
        {
          backgroundColor: `${theme.colors.Preto}`,
          image: (
            <CustomOnboarding
              imageSource={require("../../assets/images/Goal.png")}
            />
          ),
          title: (
            <CustomText
              text="Receba orientações personalizadas, dicas valiosas e suporte
              contínuo para alcançar seus objetivos de forma saudável e
              equilibrada. Baixe agora e tenha acesso direto aos melhores
              profissionais de saúde, tudo em um só lugar!"
            />
          ),
          subtitle: "",
        },
        {
          backgroundColor: `${theme.colors.Preto}`,
          image: (
            <CustomOnboarding
              imageSource={require("../../assets/images/Calories.png")}
            />
          ),
          title: <CustomText text="Contagem de calorias" />,
          subtitle: (
            <CustomText text="Acompanhe sua ingestão diária de calorias para manter um estilo de vida saudável e atingir seus objetivos de bem-estar." />
          ),
        },
        {
          backgroundColor: `${theme.colors.Preto}`,
          image: (
            <CustomOnboarding
              imageSource={require("../../assets/images/Plan.png")}
            />
          ),
          title: <CustomText text="Plano alimentar individualizado" />,
          subtitle: (
            <CustomText text="Receba um plano alimentar personalizado, adaptado às suas necessidades e preferências, para alcançar seus objetivos de saúde de forma eficaz." />
          ),
        },
        {
          backgroundColor: `${theme.colors.Preto}`,
          image: (
            <CustomOnboarding
              imageSource={require("../../assets/images/Revenues.png")}
            />
          ),
          title: <CustomText text="Receitas deliciosas" />,
          subtitle: (
            <CustomText text="Explore uma variedade de receitas irresistíveis e saudáveis, tornando a alimentação saudável uma experiência saborosa e prazerosa." />
          ),
        },
        {
          backgroundColor: `${theme.colors.Preto}`,
          image: (
            <CustomOnboarding
              imageSource={require("../../assets/images/Hate.png")}
            />
          ),
          title: <CustomText text="Avaliação de rótulos e alimentos" />,
          subtitle: (
            <ViewOnboarding>
              <CustomText text="Tome decisões informadas sobre sua dieta com a análise detalhada de rótulos e alimentos, destacando ingredientes, valores nutricionais e proporcionando uma escolha consciente para sua saúde." />
              <ButtonLinkOnboarding href="/screens/login">próximo</ButtonLinkOnboarding>
            </ViewOnboarding>
          ),
        },
      ]}
    />
  );
}
