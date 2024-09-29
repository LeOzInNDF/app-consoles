import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from '../../assets/estilos/estilos';

import sales from '../../assets/jogo/sales.png';
import disc from '../../assets/jogo/disc.png';
import money from '../../assets/jogo/money.png';
import ranking from '../../assets/jogo/ranking.png';

export default function Jogo (){
  return (
<View>
  <Text style={estilos.titulo}>O fenômeno Halo</Text>
  <Text style={[estilos.conteudo, estilos.containerScroll]}>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.
    {'\n'}
    {'\n'}
    Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.
  </Text>
  <View style={estilos.boxDados}>
    <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={sales}></Image>
    <Text style={estilos.cardTexto}>4.7 milhões de cópias</Text>
      <Text style={estilos.cardTexto}>Até Julho de 2006</Text>
    </View>
  
  <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={money}></Image>
    <Text style={estilos.cardTexto}>US$ 170 milhões</Text>
      <Text style={estilos.cardTexto}>Apenas nos EUA</Text>
    </View>
  </View>
  
    <View style={estilos.boxCard}>
      <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={ranking}></Image>
    <Text style={estilos.cardTexto}>97% de Aprovação</Text>
      <Text style={estilos.cardTexto}>Metacritic</Text>
    </View>

  
    <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={disc}></Image>
    <Text style={estilos.cardTexto}>Remake em 2014</Text>
      <Text style={estilos.cardTexto}>Para o Xbox One</Text>
    </View>
</View>
</View>
</View>
  )
}