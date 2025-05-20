import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

function ListaHorizontal() {
  const categorias = [
    "Caixaça",
    "Avalanches",
    "CãoPacabana",
    "Sorveteira Ice Te Pego",
    "Bar do Toim",
    "Churrasic Park",
    "Wesley Salgadão",
  ];

  return (
    <View>
      <Text variant="titleMedium">Categorias</Text>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Button style={{ marginRight: 8 }}>{item}</Button>
        )}
      />
    </View>
  );
}

export default ListaHorizontal;
