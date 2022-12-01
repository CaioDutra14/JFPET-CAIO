import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './telas/Login/Login';
import Cadastro from './telas/Cadastro/Cadastro';
import Servicos from './telas/Servicos/Servicos';
import Carrinho from './telas/Carrinho/Carrinho';
import Pagamento from './telas/Pagamento/Pagamento';
import Icones from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root(props) {
  return (
    <Tab.Navigator>
      <Stack.Screen name='Servicos'
      options={{
        headerRight: () => (
          <Button
            onPress={() => {props.navigation.navigate('Login')}}
            title="Sair"
            color="#000"
            marginRight={10}
          />
        ),
        tabBarIcon: ({}) => (
          <Icones name='text-document-inverted' size={20} />
        ),
      }}>
        {(props) => <Servicos {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Carrinho'
      options={{
        headerRight: () => (
          <Button
            onPress={() => {props.navigation.navigate('Login')}}
            title="Sair"
            color="#000"
            marginRight={10}
          />
        ),
        tabBarIcon: ({}) => (
          <Icones name='shopping-cart' size={20} />
        ),
      }}>
        {(props) => <Carrinho {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Pagamento'
      options={{
        tabBarIcon: ({}) => (
          <Icones name='wallet' size={20} />
        ),
      }}>
        {(props) => <Pagamento {...props} />}
      </Stack.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        useLegacyImplementation
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Cadastro">
          {(props) => <Cadastro {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Root" options={{ headerShown: false }}>
          {(props) => <Root {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
