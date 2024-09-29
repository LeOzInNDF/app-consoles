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
  <Text>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
  <View>
    <View>
    <Image source={cpu}></Image>
    <Text>Processador: Intel Pentium 3 - 733 MHz</Text>
    </View>
  </View>
  <View>
    <View>
    <Image source={gpu}></Image>
    <Text>GPU: nVidia NV2A - 233 MHz</Text>
    </View>
  </View>
  <View>
    <View>
    <Image source={ram}></Image>
    <Text>RAM: 64 MB DDR SDRAM - 200 MHz</Text>
    </View>
  </View>
  <View>
    <View>
    <Image source={hdd}></Image>
    <Text>Armazenamento: HD 8GB - 5400 RPM</Text>
    </View>
  </View>
</View>
  )
}