import React from 'react';
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'; //o papel desse import será carregar as fontes nos dispositivos
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { Background } from './src/components/Background'

//carregamento das fontes por usabilidade deve ser na primeira tela, pois quando for para alguma outra tela, ja terá as fontes desejadas

// O StatusBar foi colocado aqui para ficar como padrao para todo o app, sem necessidade de repetir codigo

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading /> //segura a tela de splash, ate tudo ser carregado
  }

  //components sendo renderizando
  return (//Esta <>     </> seria a mesma coisa que <Fragment>      </Fragment>
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes  />
    </Background>

  );
}
