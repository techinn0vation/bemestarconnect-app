import React, { useState } from "react";
import FormSteps from "../../components/FormSteps";

import {
  SafeAreaExternal,
  WrapperExternal,
  FrameBubbleExternal,
} from "../../components/sharedStyles/stylesExternal";

import CustomGenero from "../../components/CustomGenero";

import CustomResposta from "../../components/CustomResutado";
import { CalorieFire } from "../../components/Lottie/CalorieFire";

export default function Steps() {
  const [step, setStep] = useState(0);
  const [pesoAtual, setPesoAtual] = useState("");
  const [altura, setAltura] = useState("");
  const [genero, setGenero] = useState("masculino");
  const [idade, setIdade] = useState("");
  const [objetivoPeso, setObjetivoPeso] = useState("");

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const calcularCalorias = () => {
    if (pesoAtual && altura && genero && idade) {
      const alturaCm =
        genero === "cm" ? parseFloat(altura) : parseFloat(altura) * 30.48;
      const pesoKg = parseFloat(pesoAtual);

      const tmb =
        genero === "masculino"
          ? 88.362 +
            13.397 * pesoKg +
            4.799 * alturaCm -
            5.677 * parseFloat(idade)
          : 447.593 +
            9.247 * pesoKg +
            3.098 * alturaCm -
            4.33 * parseFloat(idade);

      const necessidadesCaloricas = tmb * 1.55;

      return `${Math.round(necessidadesCaloricas)}`;
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
        return `Seu objetivo é ganhar peso! Para alcançar o seu objetivo você deve consumir a mais`;
      } else if (objetivoPesoKg < parseFloat(pesoAtual)) {
        return `Seu objetivo é perder peso! Para alcançar o seu objetivo você deve consumir a menos`;
      } else {
        return `Seu objetivo é manter o peso! Para alcançar o seu objetivo você deve manter`;
      }
    } else {
      return "Por favor, preencha todos os campos!";
    }
  };

  return (
    <SafeAreaExternal>
      <WrapperExternal showsVerticalScrollIndicator={false}>
        <FrameBubbleExternal
          resizeMode="stretch"
          source={require("..//..//assets/images/Bubble.png")}
        />
        {step === 0 && (
          <FormSteps
            pergunta="Qual o seu peso atual?"
            subFrase="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
            LateralText="kg"
            placeholder="Ex: 50"
            btFormSteps="próximo"
            onClick={handleButtonClick}
            value={pesoAtual}
            onChangeText={(value: string) => setPesoAtual(value)}
          />
        )}
        {step === 1 && (
          <FormSteps
            pergunta="Qual o seu objetivo de peso?"
            subFrase="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
            LateralText="kg"
            placeholder="Ex: 50"
            btFormSteps="próximo"
            onClick={handleButtonClick}
            value={objetivoPeso}
            onChangeText={(value: string) => setObjetivoPeso(value)}
          />
        )}
        {step === 2 && (
          <FormSteps
            pergunta="Qual a sua altura?"
            subFrase="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
            LateralText="cm"
            placeholder="Ex: 150"
            btFormSteps="próximo"
            onClick={handleButtonClick}
            value={altura}
            onChangeText={(value: string) => setAltura(value)}
          />
        )}
        {step === 3 && (
          <FormSteps
            pergunta="Qual a sua idade?"
            subFrase="Responda as seguintes perguntas para personalizar seu plano e calcular seu objetivo calórico diário."
            LateralText="anos"
            placeholder="Ex: 40"
            btFormSteps="próximo"
            onClick={handleButtonClick}
            value={idade}
            onChangeText={(value: string) => setIdade(value)}
          />
        )}
        {step === 4 && (
          <CustomGenero
            btGenero="próximo"
            onClick={handleButtonClick}
            onSelectMasculino={() => setGenero("masculino")}
            onSelectFeminino={() => setGenero("feminino")}
            selected={genero === "masculino"}
          />
        )}
        {step === 5 && (
          <CustomResposta
            textSlogan={verificarObjetivoPeso()}
            animationLottie={<CalorieFire />}
            textResposta={calcularCalorias()}
            textMotivacao="Vamos bater essa meta, seguindo um plano que será feito especialmente para você!"
          />
        )}
      </WrapperExternal>
    </SafeAreaExternal>
  );
}
