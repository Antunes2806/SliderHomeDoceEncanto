import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

export default function NotaFiscal({ route }) {
  // Recebendo os dados passados na navegação
  const { valorPago, pagamentoSelecionado, logradouro, bairro, cidade, cep, numero, complemento} = route.params;
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);

  const calcularTotal = () => {
    const total = cart.reduce((total, item) => {
      const valorNumerico = parseFloat(item.valor.replace(",", "."));
      return total + valorNumerico * item.quantity;
    }, 0);
    return (total + 5).toFixed(2); // Inclui a taxa de entrega de 5 reais
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f3f3", padding: 20 }}>
     
      <View style={{ width: "100%", height: "10%", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.title}>NOTA FISCAL</Text>
      </View>

      {/* Exibindo o endereço */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Endereço de Entrega:</Text>
        <Text style={styles.addressText}>{logradouro}, {numero}, {bairro} </Text>
        <Text style={styles.addressText}> {cidade} - CEP: {cep}</Text>
        <Text style={styles.addressText}>Complemento: {complemento}</Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>Quantidade: {item.quantity}</Text>
            <Text style={styles.itemDetails}>Preço unitário: R$ {item.valor}</Text>
          </View>
        )}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Pagamento</Text>
        <Text style={styles.summaryText}>Forma de Pagamento: {pagamentoSelecionado}</Text>
        <Text style={styles.summaryText}>Troco para: R$ {valorPago}</Text>
        <Text style={styles.summaryText}>Total: R$ {calcularTotal()}</Text>
      </View>

      <View style={{ bottom: 20, alignItems: "flex-end", right: 25 }}>
        <TouchableOpacity style={{ width: "30%", backgroundColor:"#ed8585", borderRadius:90, height:"24", justifyContent: "center",  }}
        onPress={() => navigation.navigate("Finalizado")}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", color: "white" }}>
            FINALIZAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    fontFamily: "League",
    textAlign: "center",
  },
  addressContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  addressText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
    fontFamily: "League",
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
    fontFamily: "League",
  },
  itemDetails: {
    fontSize: 15,
    color: "#555",
    fontFamily: "League",
  },
  summaryContainer: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: "#ed8e8e",
    borderRadius: 5,
  },
  summaryText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "League",
    marginBottom: 5,
  },
});
