import React from 'react';
import { View, Text, Image } from 'react-native';

import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import hdd from '../../assets/especificacoes/hdd.png';
import ram from '../../assets/especificacoes/ram.png';
import estilos from '../../assets/estilos/estilos';

export default function Especificacoes (){
  return (
<View>
  <Text style={estilos.titulo}>Especificações Técnicas</Text>
  <Text style={estilos.conteudo}>Confira a seguir as especificações técnicas do NES, lançado em 1983</Text>
  <View style={estilos.boxDados}>
    <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corNintendo]}>
    <Image style={estilos.icone} source={cpu}></Image>
    <Text style={estilos.cardTexto}>Ricoh 2A03 </Text>
      <Text style={estilos.cardTexto}>- Processador 8-bit</Text>
    </View>
  
  <View style={[estilos.card, estilos.corNintendo]}>
    <Image style={estilos.icone} source={gpu}></Image>
    <Text style={estilos.cardTexto}> 52 Cores </Text>
      <Text style={estilos.cardTexto}>- 256 x 240</Text>
    </View>
  </View>
  
    <View style={estilos.boxCard}>
      <View style={[estilos.card, estilos.corNintendo]}>
    <Image style={estilos.icone} source={ram}></Image>
    <Text style={estilos.cardTexto}> 2KB RAM </Text>
      <Text style={estilos.cardTexto}>- Memória</Text>
    </View>

  
    <View style={[estilos.card, estilos.corNintendo]}>
    <Image style={estilos.icone} source={hdd}></Image>
    <Text style={estilos.cardTexto}>Armazenamento: Cartucho </Text>
      <Text style={estilos.cardTexto}>- Proprietário</Text>
    </View>
</View>
</View>
</View>
  )
}