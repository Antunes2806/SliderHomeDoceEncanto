import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carregarCarrinho = async () => {
      const carrinhoSalvo = await AsyncStorage.getItem('carrinho');
      if (carrinhoSalvo) {
        setCarrinho(JSON.parse(carrinhoSalvo));
      }
    };
    carregarCarrinho();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;
