import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const mensagens = [
  {
    id: 1,
    avatar:
      "https://img.a.transfermarkt.technology/portrait/big/68290-1692601435.jpg?lm=1",
    nome: "NEIMÁRRR",
    msg: "Upi",
    horario: "21/02/2025 22:00",
  },

  {
    id: 2,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0-0UUmgnbUoaiwq_T0RBK8CSaarsYKh-eQ&s",
    nome: "MEÇI",
    msg: "Jugar un Futebó",
    horario: "21/02/2025 19:30",
  },

  {
    id: 3,
    avatar:
      "https://i.pinimg.com/236x/fc/16/9c/fc169c4de125f69c56bf67c9ef03d931.jpg",
    nome: "CEÉRRECETE",
    msg: "Bó rrogar mané?",
    horario: "21/02/2025 20:15",
  },
];

function ConversaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Conversas</Text>
      </View>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.photo} source={{ uri: item.avatar }} />
              <View style={{ flex: 1 }}>
                <View style={styles.chat}>
                  <Text style={styles.contactName}>{item.nome}</Text>
                  <Text style={styles.contactHour}>{item.horario}</Text>
                </View>
                <Text style={styles.contactMsg}>{item.msg}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 80,
    backgroundColor: "darkgreen",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  item: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  photo: {
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: 16,
  },

  chat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  contactName: {
    fontSize: 24,
    fontWeight: "600",
    color: "darkgreen",
  },

  contactHour: {
    fontSize: 12,
    color: "gray",
  },

  contactMsg: {
    color: "",
  },
});

export default ConversaScreen;
