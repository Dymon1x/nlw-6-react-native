import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Profile } from '../../components/Profile/';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background'



export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ]

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  //Marca e desmarca o quadrados de ranked, etc
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  //mesma coisa se fizer assim
  /*
    if(categoryId === category){
      setCategory('')
    }else{
      setCategory(categoryId)
    }*/

  //FlatList é recomendado, pois irá renderizando as poucos os resultados
  //na Flatlist usando o keyExtractor, a propria lista cuida dos id's
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />

      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          subtitle="Total 6"
        />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item}
              onPress={handleAppointmentDetails}
            />

          )}
          ItemSeparatorComponent={() => <ListDivider />}

          style={styles.matches}
          showsVerticalScrollIndicator={false}

        />

      </View>
    </Background>
  );
}