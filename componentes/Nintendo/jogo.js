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
    <Text style={estilos.titulo}>Super Mario bros</Text>
    <Text style={estilos.conteudo}>Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.
      {'\n'}
      {'\n'}
      A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:
    </Text>
    <View style={estilos.boxDados}>
      <View style={estilos.boxCard}>
      <View style={[estilos.card, estilos.corNintendo]}>
      <Image style={estilos.icone} source={sales}></Image>
      <Text style={estilos.cardTexto}>40 milhões de cópias</Text>
        <Text style={estilos.cardTexto}>Até 1994</Text>
      </View>
    
    <View style={[estilos.card, estilos.corNintendo]}>
      <Image style={estilos.icone} source={money}></Image>
      <Text style={estilos.cardTexto}>US$ 72 milhões </Text>
        <Text style={estilos.cardTexto}>Primeiros 4 meses</Text>
      </View>
    </View>
    
      <View style={estilos.boxCard}>
        <View style={[estilos.card, estilos.corNintendo]}>
      <Image style={estilos.icone} source={ranking}></Image>
      <Text style={estilos.cardTexto}>95% de Aprovação</Text>
        <Text style={estilos.cardTexto}>Revista CVG</Text>
      </View>
  
    
      <View style={[estilos.card, estilos.corNintendo]}>
      <Image style={estilos.icone} source={disc}></Image>
      <Text style={estilos.cardTexto}>Remake em 1993</Text>
        <Text style={estilos.cardTexto}>Para o SNES</Text>
      </View>
  </View>
  </View>
  </View>
    )
  }