import React, { useState, useContext, createContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
//import { MainContext, useMainContext } from "../../context/MainContext";
import estilos from './estilos';
import Botao from '../../componentes/Botao';
import CampoInteiro from '../../componentes/CampoInteiro';
import { useCart } from '../../context/cart';

export default function Servicos() {

  const { servicos, cart, inverteExpandir, expandir, atualizaQuantidadeTotal, calculaTotal, navigateCarrinho, quantidade, atualizaListaCarrinho, add } = useCart();

  //const { servicos, inverteExpandir, expandir, atualizaQuantidadeTotal, calculaTotal, navigateCarrinho, quantidade, atualizaListaCarrinho } = useMainContext();

  return (
      <FlatList
        data={servicos}
        renderItem={({item}) => {
          return(
            <View style = {estilos.informacao}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.preco}>{item.preco}</Text>
              <Text style={estilos.descricao}>{item.descricao}</Text>
            <View style={estilos.carrinho}>
              <Botao valor="Adicionar ao Carrinho" acao={() => add(item)}/>
            </View>
            <View style={estilos.divisor} />
            </View>
          )
        }}
        keyExtractor={(item) => item.id}>
      </FlatList>
  );
}

/*
<View>
        {servicos.map((item, index) => {
          return (
            <View key={item.id}>
              <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.preco}>{item.preco}</Text>
              <Text style={estilos.descricao}>{item.descricao}</Text>
            </TouchableOpacity>
            <View style={estilos.carrinho}>
              <Botao valor="Adicionar ao Carrinho" acao={atualizaListaCarrinho(item)}/>
            </View>

            <View style={estilos.divisor} />
          </View>
        )
      })}
    </View>*/

