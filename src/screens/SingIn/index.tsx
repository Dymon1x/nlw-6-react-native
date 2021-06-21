import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SingIn() {
  //nome, estado atualizado
  //const [text, setText] = useState('');


  /*   return (
      <View style={styles.container}>
        <Text>Hello World, NLW Together</Text>
  
        <TextInput
          style={styles.input}
          onChangeText={setText}
        //onChangeText={(value) => setText(value)} //ambos fazem a mesma coisa
        />
  
        <Text>
          Você digitou: {text}
        </Text>
      </View>
    ); */

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent

      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      {/*  View é um agrupamento */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{`\n`}
          suas jogatinas {`\n`}
          facilmente {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie seus grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
        title="Entrar com o Discord" 
          activeOpacity={.7}
        />


      </View>
    </View>
  )
}