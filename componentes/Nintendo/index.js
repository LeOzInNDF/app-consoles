import React from 'react';
import { ScrollView} from 'react-native';

import Historia from './historia';
import Especificacoes from './especificacoes';
import Jogo from './jogo';
import Conclusao from './conclusao';

export default function Nintendo (){
  return (
<ScrollView>
<Historia />
<Especificacoes />
<Jogo />
<Conclusao />

  
</ScrollView>
  )
}
