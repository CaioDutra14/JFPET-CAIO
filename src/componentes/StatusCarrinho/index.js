import React from 'react';
import { View, Text } from 'react-native';
import Botao from '../Botao';
import estilos from './estilos';

export default function StatusCarrinho({ total, props }) {
  return <View style={estilos.conteudo}>
    <View style={estilos.total}>
      <Text style={estilos.descricao}>Total do Carrinho:</Text>
      <Text style={estilos.valor}>
        {
          total
        }
      </Text>
    </View>
    <View style={estilos.botao}>
      <Botao onPress={() => props.navigation.navigate('Pagamento')} valor='Concluir Pedido' invertido />
    </View>
  </View>
}