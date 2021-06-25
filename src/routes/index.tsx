import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {SignIn} from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

//A necessidade do NavigationContainer é para gerenciar as telas que foram abertas e saber qual era a anterior
export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}

