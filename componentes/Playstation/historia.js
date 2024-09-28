import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from '../../assets/estilos/estilos';

import PsImg from '../../assets/historia/console-playstation.jpg';

export default function Historia (){
  return (
<View style={estilos.containerScroll}>
  <Text style={estilos.titulo}>História do PlayStation</Text>
  <Image source={ PsImg } style={estilos.img}></Image>
  <Text style={estilos.conteudo}>A Sony iniciou sua jornada no mundo dos consoles de vídeo games em 1994, com a chegada do PS1 ao Japão. A expansão não demorou e em Setembro de 1995 o aparelho chegou aos Estados Unidos. Naquela época, duas outras gigantes japonesas, Sega e Nintendo, dominavam o mercado de jogos eletrônicos, e ninguém esperava que um terceiro player pudesse mudar isso. 

Quando o PS1 foi anunciado nos Estados Unidos por U$$ 299, isso mexeu com o mercado já que alguns dias antes a sega havia anunciado o Saturn por $399, o que somado com os diversos problemas causados pelo lançamento as pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos.

Isso tudo foi somado com o fato do Saturn ser focado em jogos 2D, enquanto o PS1 chegou com a proposta de ser um console totalmente em 3D, o que o tornava ainda mais interessante, por ser um console mais poderoso e mais barato que o seu concorrente.</Text>
</View>
  )
}