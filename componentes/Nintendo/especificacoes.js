import React from 'react';
import { View, Text, Image } from 'react-native';

import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import hdd from '../../assets/especificacoes/hdd.png';
import ram from '../../assets/especificacoes/ram.png';

export default function Especificacoes (){
  return (
<View>
  <Text>Especificações Técnicas</Text>
  <Text>Confira a seguir as especificações técnicas do NES, lançado em 1983</Text>
  <View>
    <View>
    <Image source={cpu}></Image>
    <Text>Processador: Ricoh 2A03 - Processador 8-bit</Text>
    </View>
  </View>
  <View>
    <View>
    <Image source={gpu}></Image>
    <Text>GPU: 52 Cores - 256 x 240</Text>
    </View>
  </View>
  <View>
    <View>
    <Image source={ram}></Image>
    <Text>RAM: 2KB RAM - Memória</Text>
    </View>
  </View>
  <View>
    <View>
    <Image source={hdd}></Image>
    <Text>Armazenamento: Cartucho - Proprietário</Text>
    </View>
  </View>
</View>
  )
}