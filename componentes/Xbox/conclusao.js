import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../../assets/estilos/estilos';

export default function Conclusao (){
  return (
<View style={estilos.containerScroll}>
  <Text style={estilos.titulo}>Conclusão</Text>
  <Text style={estilos.conteudo}>A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da industria do entretenimento.</Text>
</View>
  )
}