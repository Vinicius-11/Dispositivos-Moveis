import { View, FlatList } from "react-native";
import { List, Text } from "react-native-paper";

function ListaVertical() {
  const lojas = [
    "Caixaça",
    "Avalanches",
    "CãoPacabana",
    "Sorveteira Ice Te Pego",
    "Bar do Toim",
    "Churrasic Park",
    "Wesley Salgadão",
    "Restaurante Asa Sul",
    "Restaurante Asa Norte",
    "Restaurante Tagua",
    "Bar Ceilandia",
    "Bar Sudoeste",
    "Lanchonete Gama",
    "Pizzaria Nucleo",
  ];

  return (
    <View>
      <Text variant="titleMedium">Lojas</Text>
      <FlatList
        data={lojas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <List.Item 
            title={item} 
            description={"* 4,8"} 
          />
        )}
      />
    </View>
  );
}

export default ListaVertical;
