import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';

import img1 from '../../assets/img/serieS.jpg';
import img2 from '../../assets/img/serieX.jpg';

import estilo from './estilo';


export default function Console() {
  return (

    <ScrollView style={estilo.barra}>

      <View style={estilo.container}>

      <Image source={img1} style={estilo.img} />

      <View>
      <Text style={estilo.titulo}>Xbox series S</Text>

      <Text style={estilo.subtitulo}>Desempenho de última geração no menos Xbox de todos os tempos</Text>

      <Text style={estilo.texto}>O Series S é pra quem busca jogos de nova geraçãogastando pouco
         é o console mais barato da novageração.
          Ele é o equilibrio entre gráfico e performance</Text>
      </View>

      <Image source={img2} style={estilo.img} />

      <View>
      <Text style={estilo.titulo}>Xbox series X</Text>

      <Text style={estilo.subtitulo}>O Xbox mais rápido e poderoso de todos os tempos.</Text>

      <Text style={estilo.texto}>O Series X é pra quem quer poder absoluto. O console
        mais poderoso do mercado, excelência em gráficos e performance
      </Text>
      </View>

      </View>

      </ScrollView>

  )};