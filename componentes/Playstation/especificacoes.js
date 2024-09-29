import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from '../../assets/estilos/estilos';

import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import hdd from '../../assets/especificacoes/hdd.png';
import ram from '../../assets/especificacoes/ram.png';

export default function Especificacoes (){
  return (
<View>
  <Text style={estilos.titulo}>Especificações Técnicas</Text>
  <Text style={[estilos.conteudo, estilos.containerScroll]}>Confira a seguir as especificações técnicas do Playstation, lançado em 1994</Text>


  <View style={estilos.boxDados}>
  <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corPlaystation]}>
    <Image source={cpu} style={estilos.icone}></Image>
      <Text style={estilos.cardTexto}>Sony CXD8530BQ </Text>
       <Text style={estilos.cardTexto}> - 33.8688 MHz</Text>
      </View>
    
    <View style={[estilos.card, estilos.corPlaystation]}>
    <Image style={estilos.icone} source={gpu}></Image>
    <Text style={estilos.cardTexto}>Sony CXD8514Q </Text>
      <Text style={estilos.cardTexto}>- 1MB VRAM</Text>
   </View>
   </View>
   
   <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corPlaystation]}>
    <Image style={estilos.icone} source={ram}></Image>
    <Text style={estilos.cardTexto}>2 MB EDO DRAM </Text>
      <Text style={estilos.cardTexto}>- 33 MHz</Text>
    </View>

   <View style={[estilos.card, estilos.corPlaystation]}>
    <Image style={estilos.icone} source={hdd}></Image>
    <Text style={estilos.cardTexto}>Drive de CD-ROM</Text>
    <Text style={estilos.cardTexto}> - 660 MB / disco</Text>
    </View>
    </View>
    </View>
  </View>

  )
}