import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background'
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

//export function SingIn() {
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

export function SingIn() {
  const navigation = useNavigation(); // vendo do '@react-navigation/native'
  function handleSingIn() {
    navigation.navigate('Home');

  }

  return (
    <Background>

      <View style={styles.container}>

        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        {/*  View é um agrupamento */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas  {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie seus grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com o Discord"
            onPress={handleSingIn}
          />


        </View>
      </View>
    </Background>

  )
}