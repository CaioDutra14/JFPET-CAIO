import React from 'react';
import { View, Text } from 'react-native';
import Botao from '../Botao';
import estilos from './estilos';
import { useCart } from '../../context/cart';

export default function StatusCarrinho({props}) {

  const { totalValue } = useCart()

  return <View style={estilos.conteudo}>
    <View style={estilos.total}>
      <Text style={estilos.descricao}>Total do Carrinho:</Text>
      <Text style={estilos.valor}>R$ {totalValue}</Text>
    </View>
    <View style={estilos.botao}>
      <Botao valor='Concluir Pedido' invertido acao={() => (props.navigation.navigate("TelaFinal"))}/>
    </View>
  </View>
}

/**/ 