import * as React from 'react';
import Rotas from './src/Rotas';
import { LogBox } from 'react-native';


export default function App() {
 
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
  return (
    <Rotas/>
  );
}


