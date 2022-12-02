import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    marginLeft: 180,
    marginTop: 30,
    width: 140,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 30,
    backgroundColor: invertido ? cores.laranja : cores.roxo,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.roxo : cores.laranja,
  }
});