import React, { useContext, createContext } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import StatusCarrinho from '../../componentes/StatusCarrinho';
//import { MainContext, useMainContext } from "../../context/MainContext";
import estilos from '../Servicos/estilos';
import { useCart } from '../../context/cart';
import Botao from '../../componentes/Botao';

export default function Carrinho() {

  const { cart, remove } = useCart();
  return (
    <View>
    <StatusCarrinho />
    <FlatList
      data={cart}
      renderItem={({ index, item }) => {
        return (
          <View>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.preco}>{item.preco}</Text>
            <Text style={estilos.descricao}>{item.descricao}</Text>
            <View style={estilos.carrinho}>
              <Botao valor="Remover do Carrinho" acao={() => remove(index)} />
            </View>
            <View style={estilos.divisor} />
          </View>
        )
      }}
      keyExtractor={(item) => item.id}>
    </FlatList>
    </View>


  )
  //total={total} 
  //data={servicos}
  //renderItem={({ item }) => <Item {...item} />}
  //keyExtractor={({ id }) => String(id)}


  /*const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0



      <View>
      <StatusCarrinho/>
      {(cart.length > 0) && cart.map((item) => {
        return(
          <View key={item.id}>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.preco}>{item.preco}</Text>
            <Text style={estilos.descricao}>{item.descricao}</Text>
            <View style={estilos.divisor} />
          </View>
        )
      })}
      
    </View>






  );*/

  /*return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );*/
}
