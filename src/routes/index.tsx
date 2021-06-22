import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

//A necessidade do NavigationContainer é para gerenciar as telas que foram abertas e saber qual era a anterior
export function Routes() {
  return (

    <NavigationContainer>
      <AuthRoutes />

    </NavigationContainer>
  );
}