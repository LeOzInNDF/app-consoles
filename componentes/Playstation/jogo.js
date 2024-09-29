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
  <Text style={estilos.titulo}>Final Fantasy VII</Text>
  <Text style={[estilos.conteudo, estilos.containerScroll]}>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.
    {'\n'}
    {'\n'}
    Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:   
  </Text>


  <View style={estilos.boxDados}>
  <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corPlaystation]}>
    <Image source={sales} style={estilos.icone}></Image>
      <Text style={estilos.cardTexto}>2 milhões de cópias </Text>
       <Text style={estilos.cardTexto}>Em 2 dias no Japão</Text>
      </View>
    
    <View style={[estilos.card, estilos.corPlaystation]}>
    <Image style={estilos.icone} source={money}></Image>
    <Text style={estilos.cardTexto}>US$ 115 milhões </Text>
      <Text style={estilos.cardTexto}>Em 2 dias no Japão</Text>
   </View>
   </View>
   
   <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corPlaystation]}>
    <Image style={estilos.icone} source={ranking}></Image>
    <Text style={estilos.cardTexto}>92% de Aprovação </Text>
      <Text style={estilos.cardTexto}>Metacritic</Text>
    </View>

   <View style={[estilos.card, estilos.corPlaystation]}>
    <Image style={estilos.icone} source={disc}></Image>
    <Text style={estilos.cardTexto}>Remake em 2020</Text>
    <Text style={estilos.cardTexto}>Para o PS4</Text>
    </View>
    </View>
    </View>
  </View>

  )
}