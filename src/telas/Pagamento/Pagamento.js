import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';
import estilos from './estilos';

export default function Pagamento() {
  
  return (
    <View style={estilos.login}>
      <Image
        style={estilos.tinyLogo}
        source={require('../../../imagens/pix.jpeg')}
      />
        <Text>Mande um pix com o valor de::</Text>
        <Text>500</Text>
    </View>
  );
}
