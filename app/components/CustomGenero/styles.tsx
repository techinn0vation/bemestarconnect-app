import styled from "styled-components/native";
import { theme } from "../../themes";

export const WrapperCustomGenero = styled.View`
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.size(15)};
`;
export const ContentCustomGenero = styled.View`
  flex: 1;
  height: auto;
  background: ${theme.colors.cinzaEscuro};
  border-radius: ${theme.size(10)};
  padding: ${theme.size(15)};

  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: ${theme.size(-130)};
`;
export const ViewCustomGenero = styled.View`
  flex: 1;
  height: auto;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BlockCustomGenero = styled.View`
  flex: 1;
  height: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FrameTopCustomGenero = styled.Image`
  width: ${theme.size(100)};
  height: ${theme.size(100)};

  position: absolute;
  top: ${theme.size(-100)};
  left: ${theme.size(20)};
`;
export const MessageCustomGenero = styled.View`
  width: auto;
  background: ${theme.colors.Azul};
  border-top-left-radius: ${theme.size(6)};
  border-top-right-radius: ${theme.size(6)};
  border-bottom-right-radius: ${theme.size(6)};

  justify-content: center;
  align-items: center;
  padding: ${theme.size(10)};
  position: absolute;
  top: ${theme.size(-130)};
  left: ${theme.size(115)};
`;
export const InnerMessageCustomGenero = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(13)};
  line-height: ${theme.size(20)};
  font-weight: 600;
  text-align: center;
`;
export const SubFraseCustomGenero = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(13)};
  line-height: ${theme.size(20)};
  font-weight: 600;
  text-align: center;
`;
export const FrameCustomGenero = styled.Image`
  width: ${theme.size(100)};
  height: ${theme.size(100)};
`;
export const ButtonCustomGenero = styled.TouchableOpacity`
  width: auto;
  padding: ${theme.size(10)};
  border-radius: ${theme.size(5)};
  background: ${(props: { selected: boolean; }) =>
    props.selected ? theme.colors.Amarelo : theme.colors.Azul};
  justify-content: center;
  align-items: center;
`;
export const TextBtCustomGenero = styled.Text`
  color: ${theme.colors.Branco};
  font-size: ${theme.size(14)};
  font-weight: 700;
  line-height: ${theme.size(21)};
  text-align: center;
  text-transform: capitalize;
`;
export const DividingLineGenero = styled.View`
  padding: ${theme.size(6)};
`;
