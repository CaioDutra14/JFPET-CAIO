import React from 'react';
import { View, Text, FlatList } from 'react-native';
import StatusCarrinho from '../../componentes/StatusCarrinho';
import estilos from '../Servicos/estilos';
import { useCart } from '../../context/cart';
import Botao from '../../componentes/Botao';

export default function Carrinho(props) {

  const { cart, remove } = useCart();
  return (
    <View>
      <StatusCarrinho props={props}/>
      <FlatList
      data={cart}
      renderItem={({ index, item }) => {
        return (
          <View style = {estilos.informacao}>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.preco}>R$ {item.preco}</Text>
            <Text style={estilos.descricao}>{item.descricao}</Text>
            <View style={estilos.carrinho}>
              <Botao valor="Remover do Carrinho" acao={() => remove(index)}/>
            </View>
            <View style={estilos.divisor} />
          </View>
        )
      }}
      keyExtractor={(item) => item.id}>
    </FlatList>
    </View>
  );
}
