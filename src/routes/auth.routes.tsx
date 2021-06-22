import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SingIn } from '../screens/SingIn';

const { Navigator, Screen } = createStackNavigator();

//function route que será usada quando o usuario estiver logado

//Por padrao o navigation vem com suas proprias propriedades, mas podendo retira-las como esta abaixo
export function AuthRoutes() {
  return (
    <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle:{
        backgroundColor: 'transparent'
      }
    }}
    >
      <Screen
        name="SingIn"
        component={SingIn} />

      <Screen
        name="Home"
        component={Home} />
        
    </Navigator>
  );
}