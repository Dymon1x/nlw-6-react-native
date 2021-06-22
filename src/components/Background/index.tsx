import React, { ReactNode } from 'react'; // ReactNode é qualquer elemento filho do React

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {

  const { secondary80, secondary100 } = theme.colors; // desestruturação

  //irá reaproveitar o gradient para todas as interfaces do app
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}