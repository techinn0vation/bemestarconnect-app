import {
  BlockCustomGenero,
  ButtonCustomGenero,
  ContentCustomGenero,
  DividingLineGenero,
  FrameCustomGenero,
  FrameTopCustomGenero,
  InnerMessageCustomGenero,
  MessageCustomGenero,
  SubFraseCustomGenero,
  TextBtCustomGenero,
  ViewCustomGenero,
  WrapperCustomGenero,
} from "./styles";

interface PropGenero {
  btGenero: string;
  onClick: () => void;
  onSelectMasculino: () => void;
  onSelectFeminino: () => void;
  selected: boolean;
}

export default function CustomGenero({
  btGenero,
  onClick,
  onSelectMasculino,
  onSelectFeminino,
  selected,
}: PropGenero) {
  return (
    <WrapperCustomGenero>
      <ContentCustomGenero>
        <FrameTopCustomGenero
          resizeMode="contain"
          source={require("..//..//assets/images/Writing.png")}
        />
        <MessageCustomGenero>
          <InnerMessageCustomGenero>
            Qual o seu gênero?
          </InnerMessageCustomGenero>
        </MessageCustomGenero>

        <SubFraseCustomGenero>
          Responda as seguintes perguntas para personalizar seu plano e calcular
          seu objetivo calórico diário.
        </SubFraseCustomGenero>

        <DividingLineGenero />
        <DividingLineGenero />

        <ViewCustomGenero>
          <BlockCustomGenero>
            <FrameCustomGenero
              resizeMode="contain"
              source={require("..//..//assets/images/Man.png")}
            />
            <DividingLineGenero />
            <ButtonCustomGenero onPress={onSelectMasculino} selected={selected}>
              <TextBtCustomGenero>masculino</TextBtCustomGenero>
            </ButtonCustomGenero>
          </BlockCustomGenero>

          <DividingLineGenero />

          <BlockCustomGenero>
            <FrameCustomGenero
              resizeMode="contain"
              source={require("..//..//assets/images/Woman.png")}
            />
            <DividingLineGenero />
            <ButtonCustomGenero onPress={onSelectFeminino} selected={!selected}>
              <TextBtCustomGenero>feminino</TextBtCustomGenero>
            </ButtonCustomGenero>
          </BlockCustomGenero>
        </ViewCustomGenero>

        <DividingLineGenero />
        <DividingLineGenero />

        <ButtonCustomGenero onPress={onClick}>
          <TextBtCustomGenero>{btGenero}</TextBtCustomGenero>
        </ButtonCustomGenero>
      </ContentCustomGenero>
    </WrapperCustomGenero>
  );
}
