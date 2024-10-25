import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import axios from "axios";
import QRCode from "react-native-qrcode-svg";

export default function CarrinhoFN() {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [error, setError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [valorPago, setValorPago] = useState("");

  const [pagamentoSelecionado, setPagamentoSelecionado] = useState(null); // Estado para controlar o método de pagamento

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
          setLogradouro(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
        }
      })
      .catch(() => {
        setError("Erro ao buscar o CEP. Tente novamente mais tarde.");
      });
  };

  const handleConfirmarPagamento = () => {
    console.log(`Valor pago: R$ ${valorPago}`);
    setModalVisible(false); // Fecha o modal
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

      <ScrollView style={{ flex: 1 }}>
        {/* Buscador de CEP */}
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
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
              bottom: 20,
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

            <TouchableOpacity style={styles.button} onPress={buscarCep}>
              <Text style={styles.buttonText}>BUSCAR</Text>
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}

          {/* Campos de endereço */}
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
              bottom: 20,
            }}
          >
            <TextInput
              style={styles.resultInput}
              value={logradouro}
              placeholder="Rua"
              onChangeText={setLogradouro}
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
              bottom: 20,
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
          <View style={{ paddingHorizontal: 20, bottom: 20 }}>
            <TextInput
              style={styles.resultInput2}
              placeholder="Complemento"
              editable={true}
            />
          </View>
        </View>

        {/* Pagar na entrega */}
        <View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "League",
              paddingHorizontal: 40,
              bottom: 20,
            }}
          >
            Pagar na entrega:
          </Text>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "column",
              height: "30%",
              alignItems: "center",
              bottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setPagamentoSelecionado("dinheiro"); // Define o método de pagamento como "dinheiro"
                setModalVisible(true); // Abre o modal
              }}
              style={[
                styles.pagamentoButton,
                pagamentoSelecionado === "dinheiro" &&
                  styles.pagamentoSelecionado, // Altera a cor se selecionado
              ]}
            >
              <Text style={styles.pagamentoText}>DINHEIRO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPagamentoSelecionado("credito")}
              style={[
                styles.pagamentoButton,
                pagamentoSelecionado === "credito" &&
                  styles.pagamentoSelecionado, // Altera a cor se selecionado
              ]}
            >
              <Text style={styles.pagamentoText}>CARTÃO DE CRÉDITO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPagamentoSelecionado("debito")}
              style={[
                styles.pagamentoButton,
                pagamentoSelecionado === "debito" &&
                  styles.pagamentoSelecionado, // Altera a cor se selecionado
              ]}
            >
              <Text style={styles.pagamentoText}>CARTÃO DE DÉBITO</Text>
            </TouchableOpacity>
          </View>
          
            <Text
              style={{
                fontSize: 25,
                fontFamily: "League",
                paddingHorizontal: 40,
                bottom: 20,
              }}
            >
              Pagar agora:
            </Text>
            <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "70%",  }}>
              <Text style={{ fontSize: 18, textAlign: "center", bottom:10, }}>
                Rápido, seguro e sem complicação: pague com Pix e finalize sua
                compra em segundos!
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 30,
                bottom: 20,
              }}
            >
              <QRCode
                value={qrValue ? qrVlue : "Pagamento efetuado"}
                size={150}
                color="black"
                backgroundColor="white"
                logoSize={30}
                logoMargin={2}
                logoBorderRadius={15}
                logoBackgroundColor="yellow"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal de pagamento */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Vai precisar de troco?</Text>
            <Text style={styles.modalText2}>
              Digite o valor que você vai pagar em dinheiro, para nossa loja
              calcular o troco.
            </Text>
            <TextInput
              style={styles.inputModal}
              placeholder="R$___"
              keyboardType="numeric"
              value={valorPago}
              onChangeText={setValorPago}
              placeholderTextColor="#888" // Cor do placeholder
            />
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={handleConfirmarPagamento}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    backgroundColor: "#ed8e8e",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    height: 40,
    width: "35%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
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
  pagamentoButton: {
    justifyContent:"center",
    backgroundColor: "#f5f5f5", // Cor padrão do botão
    alignItems: "center",
    borderRadius: 30,
    width: "60%",
    height: "20%",
  },
  pagamentoSelecionado: {
    backgroundColor: "#ed8e8e", // Cor quando selecionado
  },
  pagamentoText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#ed8e8e",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "League",
  },
  modalText2: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  inputModal: {
    height: 40,
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
