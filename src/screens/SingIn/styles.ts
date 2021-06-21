import { StyleSheet } from 'react-native'; //poderá criar um objeto que conterá as regras de style da aplicação 
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  /*   input: {
      height: 50,
      width: 200,
      borderBottomWidth: 2
    }, */

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -50,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
  
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginTop: -20,
    marginBottom: 50,
  }

});