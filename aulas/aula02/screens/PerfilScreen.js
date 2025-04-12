import { View, Text, StyleSheet } from "react-native";

function PerfilScreen() {
    return (
        <View style={{flex: 1}}>
            <View style={styles.perfil}>
                <View style={styles.photo}></View>
                <View style={styles.card}>
                    <Text>Nome</Text>
                    <Text>E-mail</Text>
                </View>
            </View>
            <View style={styles.skillsSection}>
                <Text>Habilidades</Text>
                <View style={styles.skills}>
                    <Text>Java Script</Text>
                    <Text>React Native</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    perfil: {
        flexDirection: "row",
        padding: 16
    },

    photo: {
        width: 80,
        height: 80,
        backgroundColor: "gray",
        borderRadius: 40
    },

    card: {
        justifyContent: "center",
        padding: 16
    },

    skillsSection: {
        paddingLeft: 16
    },

    skills: {
        flexDirection: "row",
        gap: 8
    }
})

export default PerfilScreen;