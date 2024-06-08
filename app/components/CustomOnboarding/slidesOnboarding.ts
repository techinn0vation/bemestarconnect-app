// slides.ts
import { ImageSourcePropType } from "react-native";

// Defina a interface para os slides
export interface Slide {
  key: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

// Defina os slides
export const slides: Slide[] = [
  {
    key: "1",
    title: "Bem-vindo ao BemEstarConnect",
    description:
      "Transforme sua jornada de saúde com o nosso aplicativo! Nutricionistas e Personal Trainers estão à sua disposição das 8h às 18h para esclarecer todas as suas dúvidas.",
    image: require("../../assets/img/Asset-A01.png"),
  },
  {
    key: "2",
    title: "Suporte e orientações",
    description:
      "Receba orientações personalizadas, dicas valiosas e suporte contínuo para alcançar seus objetivos de forma saudável e equilibrada. Baixe agora e tenha acesso direto aos melhores profissionais de saúde, tudo em um só lugar!",
    image: require("../../assets/img/Asset-A02.png"),
  },
  {
    key: "3",
    title: "Contagem de calorias",
    description:
      "Acompanhe sua ingestão diária de calorias para manter um estilo de vida saudável e atingir seus objetivos de bem-estar.",
    image: require("../../assets/img/Asset-A03.png"),
  },
  {
    key: "4",
    title: "Plano alimentar individualizado",
    description:
      "Receba um plano alimentar personalizado, adaptado às suas necessidades e preferências, para alcançar seus objetivos de saúde de forma eficaz.",
    image: require("../../assets/img/Asset-A04.png"),
  },
  {
    key: "5",
    title: "Receitas deliciosas",
    description:
      "Explore uma variedade de receitas irresistíveis e saudáveis, tornando a alimentação saudável uma experiência saborosa e prazerosa.",
    image: require("../../assets/img/Asset-A05.png"),
  },
  {
    key: "6",
    title: "Avaliação de rótulos e alimentos",
    description:
      "Tome decisões informadas sobre sua dieta com a análise detalhada de rótulos e alimentos, destacando ingredientes, valores nutricionais e proporcionando uma escolha consciente para sua saúde.",
    image: require("../../assets/img/Asset-A06.png"),
  },
];
