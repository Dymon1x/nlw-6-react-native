import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';

import { AppointmentCreate } from '../screens/AppointmentCreate';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

//function route que será usada quando o usuario estiver logado

//Por padrao o navigation vem com suas proprias propriedades, mas podendo retira-las como esta abaixo
export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="Home"
        component={Home} />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails} />

      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  );
}