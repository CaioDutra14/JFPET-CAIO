import React from 'react';
//import { FlatList } from 'react-native';
import StatusCarrinho from '../../componentes/StatusCarrinho';
//import Item from './Item';

/*const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 80,
    descricao: 'NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.',
    quantidade: 0,
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 100,
    descricao: 'Uma dose da vacina V4. Seu gato precisa de duas.',
    quantidade: 0,
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 90,
    descricao:
      'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.',
    quantidade: 0,
  },
];*/

export default function Carrinho(props) {

  return(
    <StatusCarrinho />
  )
  /*const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
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
