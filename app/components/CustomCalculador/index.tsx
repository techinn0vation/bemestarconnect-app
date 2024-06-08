import { useState } from "react";
import CustomMedidas from "./CustomMedidas";
import { WrapperCustomCalculador } from "./styles";
import CustomGenero from "./CustomGenero";
import CustomObjetivo from "./CustomObjetivo";

// export default function CustomCalculador() {
//   const [step, setStep] = useState(0);
//   const [pesoAtual, setPesoAtual] = useState("");
//   const [altura, setAltura] = useState("");
//   const [genero, setGenero] = useState("masculino");
//   const [idade, setIdade] = useState("");
//   const [objetivoPeso, setObjetivoPeso] = useState("");

//   const handleNextStep = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const calcularCalorias = () => {
//     if (pesoAtual && altura && genero && idade) {
//       const alturaCm =
//         genero === "cm" ? parseFloat(altura) : parseFloat(altura) * 30.48;
//       const pesoKg = parseFloat(pesoAtual);

//       const tmb =
//         genero === "masculino"
//           ? 88.362 +
//             13.397 * pesoKg +
//             4.799 * alturaCm -
//             5.677 * parseFloat(idade)
//           : 447.593 +
//             9.247 * pesoKg +
//             3.098 * alturaCm -
//             4.33 * parseFloat(idade);

//       const necessidadesCaloricas = tmb * 1.55;

//       return `${Math.round(necessidadesCaloricas)}`;
//     } else {
//       return "Por favor, preencha todos os campos necessários!";
//     }
//   };

//   const verificarObjetivoPeso = () => {
//     if (objetivoPeso && pesoAtual) {
//       const objetivoPesoKg = parseFloat(objetivoPeso);

//       if (isNaN(objetivoPesoKg)) {
//         return "Por favor, preencha o campo 'Qual o seu objetivo de peso?' com um valor numérico";
//       }

//       if (objetivoPesoKg > parseFloat(pesoAtual)) {
//         return `Seu objetivo é ganhar peso! Vamos criar um plano personalizado para alcançar seu objetivo!`;
//       } else if (objetivoPesoKg < parseFloat(pesoAtual)) {
//         return `Seu objetivo é perder peso! Vamos criar um plano personalizado para alcançar seu objetivo!`;
//       } else {
//         return `Seu objetivo é manter o peso! Vamos criar um plano personalizado para alcançar seu objetivo!`;
//       }
//     } else {
//       return "Por favor, preencha todos os campos!";
//     }
//   };

//   return (
//     <WrapperCustomCalculador>
//       {step === 0 && (
//         <CustomMedidas
//           title="Qual o seu peso atualmente?"
//           subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
//           imageSource={require("../../assets/img/Asset-A07.png")}
//           value={pesoAtual}
//           onChangeText={setPesoAtual}
//           placeholder="Ex: 80"
//           tagName="kg"
//           onPress={handleNextStep}
//         />
//       )}
//       {step === 1 && (
//         <CustomMedidas
//           title="Qual o seu objetivo de peso?"
//           subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
//           imageSource={require("../../assets/img/Asset-A07.png")}
//           value={objetivoPeso}
//           onChangeText={setObjetivoPeso}
//           placeholder="Ex: 65"
//           tagName="kg"
//           onPress={handleNextStep}
//         />
//       )}
//       {step === 2 && (
//         <CustomMedidas
//           title="Qual a sua altura?"
//           subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
//           imageSource={require("../../assets/img/Asset-A07.png")}
//           value={altura}
//           onChangeText={setAltura}
//           placeholder="Ex: 172"
//           tagName="Cm"
//           onPress={handleNextStep}
//         />
//       )}
//       {step === 3 && (
//         <CustomMedidas
//           title="Qual a sua idade?"
//           subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
//           imageSource={require("../../assets/img/Asset-A07.png")}
//           value={idade}
//           onChangeText={setIdade}
//           placeholder="Ex: 20"
//           tagName="Anos"
//           onPress={handleNextStep}
//         />
//       )}
//       {step === 4 && (
//         <CustomGenero
//           title="Qual é o seu gênero?"
//           subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
//           imageSource={require("../../assets/img/Asset-A07.png")}
//           onPress={handleNextStep}
//           onSelectMasculino={() => setGenero("male")}
//           onSelectFeminino={() => setGenero("female")}
//           selected={genero === "male"}
//         />
//       )}
//       {step === 5 && (
//         <CustomObjetivo
//           title="Muito bem!"
//           subtitle={verificarObjetivoPeso()}
//           lottieAnimation={<Calorie />}
//           resultados={calcularCalorias()}
//           imageSource={require("../../assets/img/Asset-A07.png")}
//           onPress={() => {}}
//         />
//       )}
//     </WrapperCustomCalculador>
//   );
// }

export default function CustomCalculador() {
  const [step, setStep] = useState(0);
  const [pesoAtual, setPesoAtual] = useState("");
  const [altura, setAltura] = useState("");
  const [genero, setGenero] = useState("male");
  const [idade, setIdade] = useState("");
  const [objetivoPeso, setObjetivoPeso] = useState("");

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const calcularCalorias = () => {
    if (pesoAtual && altura && genero && idade) {
      const alturaCm = parseFloat(altura);
      const pesoKg = parseFloat(pesoAtual);
      const idadeNum = parseInt(idade, 10);

      const tmb =
        genero === "male"
          ? 88.36 + 13.4 * pesoKg + 4.8 * alturaCm - 5.7 * idadeNum
          : 447.6 + 9.2 * pesoKg + 3.1 * alturaCm - 4.3 * idadeNum;

      let caloriasObjetivo;

      const objetivoPesoNum = parseFloat(objetivoPeso);
      if (objetivoPesoNum > pesoKg) {
        caloriasObjetivo = tmb + 500;
      } else if (objetivoPesoNum < pesoKg) {
        caloriasObjetivo = tmb - 500;
      } else {
        caloriasObjetivo = tmb;
      }

      return `${Math.round(caloriasObjetivo)} kcal`;
    } else {
      return "Por favor, preencha todos os campos necessários!";
    }
  };

  const verificarObjetivoPeso = () => {
    if (objetivoPeso && pesoAtual) {
      const objetivoPesoKg = parseFloat(objetivoPeso);

      if (isNaN(objetivoPesoKg)) {
        return "Por favor, preencha o campo 'Qual o seu objetivo de peso?' com um valor numérico";
      }

      if (objetivoPesoKg > parseFloat(pesoAtual)) {
        return `Seu objetivo é ganhar peso! Vamos criar um plano personalizado para alcançar seu objetivo!`;
      } else if (objetivoPesoKg < parseFloat(pesoAtual)) {
        return `Seu objetivo é perder peso! Vamos criar um plano personalizado para alcançar seu objetivo!`;
      } else {
        return `Seu objetivo é manter o peso! Vamos criar um plano personalizado para alcançar seu objetivo!`;
      }
    } else {
      return "Por favor, preencha todos os campos!";
    }
  };

  return (
    <WrapperCustomCalculador>
      {step === 0 && (
        <CustomMedidas
          title="Qual o seu peso atualmente?"
          subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
          imageSource={require("../../assets/img/Asset-A07.png")}
          value={pesoAtual}
          onChangeText={setPesoAtual}
          placeholder="Ex: 80"
          tagName="kg"
          onPress={handleNextStep}
        />
      )}
      {step === 1 && (
        <CustomMedidas
          title="Qual o seu objetivo de peso?"
          subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
          imageSource={require("../../assets/img/Asset-A07.png")}
          value={objetivoPeso}
          onChangeText={setObjetivoPeso}
          placeholder="Ex: 75"
          tagName="kg"
          onPress={handleNextStep}
        />
      )}
      {step === 2 && (
        <CustomMedidas
          title="Qual a sua altura?"
          subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
          imageSource={require("../../assets/img/Asset-A07.png")}
          value={altura}
          onChangeText={setAltura}
          placeholder="Ex: 160"
          tagName="Cm"
          onPress={handleNextStep}
        />
      )}
      {step === 3 && (
        <CustomMedidas
          title="Qual a sua idade?"
          subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
          imageSource={require("../../assets/img/Asset-A07.png")}
          value={idade}
          onChangeText={setIdade}
          placeholder="Ex: 30"
          tagName="Anos"
          onPress={handleNextStep}
        />
      )}
      {step === 4 && (
        <CustomGenero
          title="Qual é o seu gênero?"
          subtitle="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
          imageSource={require("../../assets/img/Asset-A07.png")}
          onPress={handleNextStep}
          onSelectMasculino={() => setGenero("male")}
          onSelectFeminino={() => setGenero("female")}
          selected={genero === "male"}
        />
      )}
      {step === 5 && (
        <CustomObjetivo
          title="Muito bem!"
          subtitle={verificarObjetivoPeso()}
          // lottieAnimation={<CalorieAnim />}
          resultados={calcularCalorias()}
          imageSource={require("../../assets/img/Asset-A08.png")}
          onPress={() => {}}
        />
      )}
    </WrapperCustomCalculador>
  );
}
