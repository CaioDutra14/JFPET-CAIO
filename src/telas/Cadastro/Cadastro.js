import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import estilos from './estilos';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConnection from '../../database/firebaseConnection';


export default function Login(props) {

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const cadastrar = () => {
    const auth = getAuth(firebaseConnection);
    createUserWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário Cadastrado: ');
        props.navigation.navigate("Login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Erro ao Cadastrar: ' + errorCode + ' - ' + errorMessage);
        Alert.alert('Erro no cadastro!!')
      });
  };

  return (
    
      <View style={estilos.login}>

        <Image style={estilos.tinyLogo}
          source={require('../../../imagens/JFPET.png')}
        />

        <Text style={estilos.font}>Crie sua conta</Text>

        <View style={estilos.v2}>

          <Text style={estilos.font}>E-mail</Text>
          <TextInput placeholder="user@email.com"
            value={mail} onChangeText={(text) => setMail(text)} style={estilos.input}></TextInput>

          <Text style={estilos.font}>Senha</Text>
          <TextInput placeholder="************" secureTextEntry
            value={pass} onChangeText={(text) => setPass(text)} style={estilos.input}></TextInput>

          <TouchableOpacity style={estilos.to2} onPress={() => { cadastrar() }}>
            <Text style={estilos.font}>Confirmar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => (props.navigation.navigate("Login"))}>
            <Text style={estilos.font}>Voltar para Login!</Text>
          </TouchableOpacity>

        </View>
      </View>

  )
}