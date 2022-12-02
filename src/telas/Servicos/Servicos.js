import React from 'react';
import { View, Text, FlatList } from 'react-native';
import estilos from './estilos';
import Botao from '../../componentes/Botao';
//import CampoInteiro from '../../componentes/CampoInteiro';
import { useCart } from '../../context/cart';

export default function Servicos() {

  const { servicos, add } = useCart();

  return (
      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return(
            <View style = {estilos.informacao}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.preco}>R$ {item.preco}</Text>
              <Text style={estilos.descricao}>{item.descricao}</Text>
            <View style={estilos.carrinho}>
              <Botao valor="Adicionar ao Carrinho" acao={() => add(item)}/>
            </View>
            <View style={estilos.divisor} />
            </View>
          )
        }}>
      </FlatList>
  );
}

