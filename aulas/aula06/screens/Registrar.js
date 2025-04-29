import { View, Text, Button } 
    from 'react-native'

function Registrar({ navigation }) {
    return <View 
        style={{flex: 1,
        justifyContent: "center", 
        alignItems: "center"}}>
        <Text>Registrar</Text>
        <Button 
            title="Criar" 
            onPress={()=>{}}
        />
        <Button 
            title="Voltar" 
            onPress={()=>navigation.goBack()}
        />
    </View>
}

export default Registrar;