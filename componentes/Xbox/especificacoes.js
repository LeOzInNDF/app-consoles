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
  <Text style={estilos.conteudo}>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
  <View style={estilos.boxDados}>
    <View style={estilos.boxCard}>
    <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={cpu}></Image>
    <Text style={estilos.cardTexto}>Intel Pentium 3</Text>
      <Text style={estilos.cardTexto}>- 733 MHz</Text>
    </View>
  
  <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={gpu}></Image>
    <Text style={estilos.cardTexto}>nVidia NV2A </Text>
      <Text style={estilos.cardTexto}>233 MHz</Text>
    </View>
  </View>
  
    <View style={estilos.boxCard}>
      <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={ram}></Image>
    <Text style={estilos.cardTexto}>64 MB DDR SDRAM</Text>
      <Text style={estilos.cardTexto}>- 200 MHz</Text>
    </View>

  
    <View style={[estilos.card, estilos.corXbox]}>
    <Image style={estilos.icone} source={hdd}></Image>
    <Text style={estilos.cardTexto}>HD 8GB </Text>
      <Text style={estilos.cardTexto}>- 5400 RPM</Text>
    </View>
</View>
</View>
</View>
  )
}