import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import estilos from './estilos';
import Icones from 'react-native-vector-icons/AntDesign';
import { useCart } from '../../context/cart';

export default function TelaFinal(props) {

    const { mail, totalValue } = useCart();

    return (
        <View style={estilos.login}>
            <Image
                style={estilos.tinyLogo}
                source={require('../../../imagens/JFPET.png')}
            />
            <Text style={estilos.font}>Olá! {mail} !</Text>
            <Text style={estilos.font}>Seu pedido foi finalizado!</Text>
            <Text style={estilos.price}>Valor: R$ {totalValue}</Text>
            <Text style={estilos.font}>- Aceitamos PIX</Text>
            <Text style={estilos.font}>- Cartão de crédito</Text>
            <Text style={estilos.font}>Endereço:</Text>
            <Text style={estilos.font}>Rua Alencar Tristão, 580</Text>
            <Text style={estilos.font}>Juiz de Fora/MG</Text>

            <View style={estilos.v2}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={estilos.to}>
                    <Icones
                        style={estilos.icon}
                        name="home"
                        size={20}
                    />
                    <Text style={estilos.font}>Voltar para o inicio</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
