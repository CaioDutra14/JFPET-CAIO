import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import estilos from './estilos';
import Icones from 'react-native-vector-icons/AntDesign';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { useCart } from '../../context/cart';

export default function Login(props) {

  const { mail, pass, setMail, setPass } = useCart();
  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário Logado: ');
        props.navigation.navigate("Root")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Erro ao logar: ' + errorCode + ' - ' + errorMessage);
        Alert.alert('Dados Incorretos!')
      });
  };

  return (
    <View style={estilos.login}>
      <Image
        style={estilos.tinyLogo}
        source={require('../../../imagens/JFPET.png')}
      />

      <Text style={estilos.font}>Faça o seu login</Text>

      <View style={estilos.v2}>
        <Text style={estilos.font}>E-mail</Text>
        <TextInput
          placeholder="user@email.com"
          value={mail}
          onChangeText={(text) => setMail(text)}
          style={estilos.input}></TextInput>

        <Text style={estilos.font}>Senha</Text>
        <TextInput
          placeholder="************"
          secureTextEntry
          value={pass}
          onChangeText={(text) => setPass(text)}
          style={estilos.input}></TextInput>

        <TouchableOpacity style={estilos.to2} onPress={() => login()}>
          <Text style={estilos.font}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')} style={estilos.to}>
          <Icones
            style={estilos.icon}
            name="pluscircle"
            size={20}
          />
          <Text style={estilos.font}>Cadastrar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
