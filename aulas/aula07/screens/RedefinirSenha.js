import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import * as Yup from "yup";

function RedefinirSenha() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("E-mail é obrigatório")
      .email("E-mail é invalido"),
  });

  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  // const validaEmail = () => {
  //   if (!email) {
  //     setErro("E-mail é obrigatorio");
  //     return false;
  //   }

  //   if (!email.includes("@")) {
  //     setErro("E-mail inválido");
  //     return false;
  //   }

  //   return true;
  // };

  const trataTexto = async (texto) => {
    try {
      setEmail(texto);
      await schema.validate({ email });
      setErro("");
    } catch (err) {
      setErro(err.errors);
    }
  };

  const trataEnviar = async () => {
    try {
      await schema.validate({ email });
      setErro("");
      setEmail("");
      alert("E-mail enviado!");
    } catch(err) {
      setErro(err.errors)
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        value={email}
        onChangeText={trataTexto}
        mode="outlined"
        error={erro != ""}
      />
      <HelperText type="error" visible={erro != ""}>
        {erro}
      </HelperText>
      <Button mode="contained" onPress={trataEnviar}>
        Enviar
      </Button>
    </View>
  );
}

export default RedefinirSenha;