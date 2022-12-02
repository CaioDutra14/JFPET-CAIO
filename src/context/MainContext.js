import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View } from 'react-native';
import estilos from '../telas/Servicos/estilos';
import Servicos from "../telas/Servicos/Servicos";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {

  const [quantidade, setQuantidade] = useState(1);
  const [item, setItem] = useState({});
  const [listaCarrinho, setListaCarrinho] = useState([]);
  const [total, setTotal] = useState();
  const navigation = useNavigation();

  const servicos = [
    {
      id: 1,
      nome: 'Banho',
      preco: 80,
      descricao: 'NÃO DE BANHO NO SEU PET! Mas se precisar nós damos.',
    },
    {
      id: 2,
      nome: 'Vacina V4',
      preco: 100,
      descricao: 'Uma dose da vacina V4. Seu PET precisa de duas.',
    },
    {
      id: 3,
      nome: 'Vacina Antirrábica',
      preco: 90,
      descricao: 'Uma dose da vacina antirrábica. Seu PET precisa de uma por ano.',
    },
    {
      id: 4,
      nome: 'Ração Pedigree Nutrição Essencial',
      preco: 149,
      descricao: 'Nutrição essencial sabor carne para cães adultos.',
    },
    {
      id: 5,
      nome: 'Ração Whiskas para Gatos',
      preco: 169,
      descricao: 'Ração premium 100% completa e balanceada.',
    },
  ];

  function adicionarCarrinho(item) {
    const novoCarrinho = listaCarrinho
    novoCarrinho.push(item)
    setListaCarrinho(novoCarrinho)
  }

  const atualizaListaCarrinho = (item) => {
    setListaCarrinho(servicos)
  }

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  }

  const calculaTotal = (novaQuantidade, preco) => {
    setTotal(novaQuantidade * preco);
  }

  //const totalCarrinho

  const navigateServicos = () => {
    navigation.navigate("Servicos");
  };

  const navigateCarrinho = () => {
    navigation.navigate("Carrinho");
  };

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  }

  return (
    <MainContext.Provider
      value={{
        navigateServicos,
        navigateCarrinho,
        atualizaQuantidadeTotal,
        calculaTotal,
        atualizaListaCarrinho,
        inverteExpandir,
        adicionarCarrinho,
        servicos,
        listaCarrinho
      }}
    >
      <View style = {estilos.divisor} />
      {children}
    </MainContext.Provider>
    
  );
};

export const useMainContext = () => useContext(MainContext);