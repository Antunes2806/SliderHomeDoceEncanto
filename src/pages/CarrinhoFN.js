import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function CarrinhoFN() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");

  const buscarCep = () => {
    setError("");
    if (cep.length !== 8) {
      setError("Por favor, insira um CEP válido.");
      return;
    }

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (response.data.erro) {
          setError("CEP não encontrado.");
        } else {
          // Atualiza os campos com os dados da busca
          setLogradouro(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
        }
      })
      .catch(() => {
        setError("Erro ao buscar o CEP. Tente novamente mais tarde.");
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f3f3" }}>
      {/* Título do carrinho */}
      <View
        style={{
          width: "100%",
          height: "10%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "League",
            textAlign: "center",
          }}
        >
          MEU CARRINHO
        </Text>
      </View>

      {/* Buscador de CEP */}
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25, // Tamanho da fonte
            fontFamily: "League",
            padding: 20,
          }}
        >
          Entregar no endereço:
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 20,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Digite o CEP"
            value={cep}
            keyboardType="numeric"
            maxLength={8}
            onChangeText={setCep}
          />

          {/* Botão personalizado com TouchableOpacity */}
          <TouchableOpacity style={styles.button} onPress={buscarCep}>
            <Text style={styles.buttonText}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Campos de endereço fixos e editáveis */}
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={styles.resultInput}
            value={logradouro}
            placeholder="Rua"
            onChangeText={setLogradouro} // Permite a edição manual
            editable={true}
          />
          <TextInput
            style={styles.resultInput}
            value={bairro}
            placeholder="Bairro"
            onChangeText={setBairro}
            editable={true}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 20,
          }}
        >
          <TextInput
            style={styles.resultInput}
            value={cidade}
            placeholder="Cidade"
            onChangeText={setCidade}
            editable={true}
          />
          <TextInput
            style={styles.resultInput}
            placeholder="Numero"
            editable={true}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            style={styles.resultInput2}
            placeholder="Complemento"
            editable={true}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 25, // Tamanho da fonte
          fontFamily: "League",
          paddingHorizontal: 40,
        }}
      >
        Pagar na entrega:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    width: "60%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#ed8e8e", // Cor de fundo do botão
    justifyContent: "center",
    borderRadius: 10, // Arredondamento dos cantos
    alignItems: "center", // Centraliza o texto no botão
    height: 40,
    width: "35%",
  },
  buttonText: {
    color: "#fff", // Cor do texto
    fontSize: 20, // Tamanho da fonte
    fontFamily: "League",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  resultInput: {
    height: 40,
    width: "45%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultInput2: {
    height: 40,
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
