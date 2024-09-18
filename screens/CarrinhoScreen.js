import React, { useContext } from "react";
import { View, Text, Button, FlatList } from "react-native";
import CarrinhoContext from "../contex/CarrinhoContext";

const CarrinhoScreen = () => {
  const { carrinho, adicionarAoCarrinho, removerDoCarrinho } =
    useContext(CarrinhoContext);

  const produtos = [
    { id: 1, nome: "Produto 1", preco: 10 },
    { id: 2, nome: "Produto 2", preco: 20 },
  ];

  return (
    <View>
      <Text>Carrinho de Compras</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.nome} - R${item.preco}
            </Text>
            <Button
              title="Adicionar ao Carrinho"
              onPress={() => adicionarAoCarrinho(item)}
            />
          </View>
        )}
      />

      <Text>Itens no Carrinho:</Text>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.nome} - R${item.preco}
            </Text>
            <Button
              title="Remover"
              onPress={() => removerDoCarrinho(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CarrinhoScreen;
