// slides.ts
import { ImageSourcePropType } from "react-native";

// Defina a interface para os slides
export interface propsSlidesOnboarding {
  key: string;
  title: string;
  subTitle: string;
  imageSlide: ImageSourcePropType;
}

// Defina os slides
export const slides: propsSlidesOnboarding[] = [
  {
    key: "1",
    title: "Bem-vindo ao BemEstarConnect",
    subTitle:
      "Transforme sua jornada de saúde com o nosso aplicativo! Nutricionistas e Personal Trainers estão à sua disposição das 8h às 18h para esclarecer todas as suas dúvidas.",
    imageSlide: require("../../assets/img/Asset-A01.png"),
  },
  {
    key: "2",
    title: "Suporte e orientações",
    subTitle:
      "Receba orientações personalizadas, dicas valiosas e suporte contínuo para alcançar seus objetivos de forma saudável e equilibrada. Baixe agora e tenha acesso direto aos melhores profissionais de saúde, tudo em um só lugar!",
    imageSlide: require("../../assets/img/Asset-A02.png"),
  },
  {
    key: "3",
    title: "Contagem de calorias",
    subTitle:
      "Acompanhe sua ingestão diária de calorias para manter um estilo de vida saudável e atingir seus objetivos de bem-estar.",
    imageSlide: require("../../assets/img/Asset-A03.png"),
  },
  {
    key: "4",
    title: "Plano alimentar individualizado",
    subTitle:
      "Receba um plano alimentar personalizado, adaptado às suas necessidades e preferências, para alcançar seus objetivos de saúde de forma eficaz.",
    imageSlide: require("../../assets/img/Asset-A04.png"),
  },
  {
    key: "5",
    title: "Receitas deliciosas",
    subTitle:
      "Explore uma variedade de receitas irresistíveis e saudáveis, tornando a alimentação saudável uma experiência saborosa e prazerosa.",
    imageSlide: require("../../assets/img/Asset-A05.png"),
  },
  {
    key: "6",
    title: "Avaliação de rótulos e alimentos",
    subTitle:
      "Tome decisões informadas sobre sua dieta com a análise detalhada de rótulos e alimentos, destacando ingredientes, valores nutricionais e proporcionando uma escolha consciente para sua saúde.",
    imageSlide: require("../../assets/img/Asset-A06.png"),
  },
];
