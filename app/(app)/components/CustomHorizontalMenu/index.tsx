import { Dimensions, FlatList } from "react-native";
import CustomItem from "./CustomItem";
import { WrapperCustomHorizontalMenu } from "./styles";
import { ItemsNutrição } from "./listItems";

const { width: screenWidth } = Dimensions.get("window");

export default function CustomHorizontalMenu() {
  const renderItem = ({ item }: any) => (
    <CustomItem
      text={item.text}
      destination={item.destination}
      imageSource={item.image}
    />
  );
  return (
    <WrapperCustomHorizontalMenu>
      <>
        <FlatList
          data={ItemsNutrição}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth}
          decelerationRate={0.9}
        />
      </>
    </WrapperCustomHorizontalMenu>
  );
}
