import { View, Text, Button } from "react-native";

function Perfil({ navigation, route }) {
  const { id, nome } = route.params 
  ? route.params
  : {id: null, nome: null};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Perfil 
        {route.params && `${id}-${nome}`}</Text>
      <Button title="Voltar" onPress={() => 
        navigation.goBack()} />
    </View>
  );
}

export default Perfil;