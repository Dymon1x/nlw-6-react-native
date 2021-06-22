import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProperties & {
  title: string;
  subtitle: string;
}

export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      < Text style={styles.title}>
        {title}
      </Text>
      < Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}