import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

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
    descricao:
      'Uma dose da vacina antirrábica. Seu PET precisa de uma por ano.',
  },
];

export default function Servicos(props) {
  return (
    <>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} props={props}/>}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
