import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';// esse import resolverá problemas de espaçamento no marginTop em iphone

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row', //Por padrão o flexDirection é por coluna para ficar um a baixo do outro, usando o 'row' os elementos ficaram alinhados lado a lado
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,

  },
  content: {
    marginTop: 42,

  },
  matches: {
    marginTop: 24,
    marginLeft: 24
  }
});