import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function GaleriaScreen() {
  const imagens = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
    "https://picsum.photos/200?random=7",
    "https://picsum.photos/200?random=8",
    "https://picsum.photos/200?random=9",
    "https://picsum.photos/200?random=10",
    "https://picsum.photos/200?random=11",
    "https://picsum.photos/200?random=12",
    "https://picsum.photos/200?random=13",
    "https://picsum.photos/200?random=14",
    "https://picsum.photos/200?random=15",
    "https://picsum.photos/200?random=16",
    "https://picsum.photos/200?random=17",
    "https://picsum.photos/200?random=18",
    "https://picsum.photos/200?random=19",
    "https://picsum.photos/200?random=20",
    "https://picsum.photos/200?random=21",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Imagens</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
          <Image style={styles.imagem} source={{ uri: imagem }} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 64,
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
    backgroundColor: "gray",
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 8,
  },
  imagem: {
    height: 100,
    width: "31%",
  },
});

export default GaleriaScreen;