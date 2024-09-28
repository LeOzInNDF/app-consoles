import React from 'react';
import { View, Text, Image } from 'react-native';

import ndImg from '../../assets/historia/console-nintendo.jpg'

export default function Historia (){
  return (
<View>
  <Text>História do Nintendo Entertainment System</Text>
  <Image source={ndImg} ></Image>
  <Text>Um dos consoles mais emblemáticos da Nintendo até hoje foi lançado em 1983 no Japão com o nome de Famicom (Family Computer), mas só em 1985 o console chegou aos Estados Unidos, com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES).

O NES ajudou a revitalizar a indústria de vídeo games após a quebra da mesma devido a uma saturação de mercado com diversos consoles de baixa qualidade disponíveis. A nintendo mirou e acertou em cheio, trazendo com o NES um console barato, simples e de alta qualidade para as mãos dos consumidores.

O console foi lançado no dia 15 de Julho de 1983 no japão, juntamente com os jogos Donkey Kong, Donkey Kong Jr. e Popey, todos feitos pela Nintendo para arcade. Ao final de 1984 o Famicom já era console mais vendido do país. O console chegou em Nova York, nos Estados Unidos, em 1985 mas o lançamento a nível nacional só ocorreu em Fevereiro de 1986, contando com 17 jogos disponíveis no lançamento.</Text>
</View>
  )
}