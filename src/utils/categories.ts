// quando irá ter varias function dentro do app, ficará aqui no utils/categories

import RankedSvg from '../assets/ranked.svg'
import DuelSvg from '../assets/duel.svg'
import FunSvg from '../assets/fun.svg'
import TrainingSvg from '../assets/training.svg'

/*Por padrao o react-native nao consegue trabalhar com SVG
mas para utilizar SVG deve instalar: expo install react-native-svg
e em conjunto instalar o: yarn add --dev react-native-svg-transformer e 
criar o arquivo metro.config.js: com o conteudo abaixo


*/

export const categories = [
  { id: '1', title: 'Ranqueada', icon: RankedSvg},
  { id: '2', title: 'Duelo 1x1', icon: DuelSvg},
  { id: '3', title: 'Diversão', icon: FunSvg},
  { id: '4', title: 'Treino', icon: TrainingSvg},
]