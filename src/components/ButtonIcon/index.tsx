import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import {
  Text, Image, View,
  // TouchableOpacity,    //click - substituido pelo RectButton
  //TouchableOpacityProps // substituido pelo RectButtonProperties
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

//recebe todas as propriedades de TouchableOpacity mais as que foram criadas dentro das chaves
type Props = RectButtonProperties & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />

      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}