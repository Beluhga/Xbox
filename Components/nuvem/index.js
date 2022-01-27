import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import nuvem from '../../assets/img/nuvem.jpg';
import jogos from '../../assets/img/gloud.jpg';

import estilo from './estilo';


export default function Jogos() {
  return (

    <ImageBackground source={ nuvem }  style={estilo.pagina}>
      <View style={estilo.pagina}>

        <View>
      <Text style={estilo.titulo}>Xbox Cloud Gaming</Text>
      <Text style={estilo.subtitulo}>Serviço de streaming de jogos</Text>
      </View>
      
      <View>
        <Text style={estilo.texto}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>

        <Text style={estilo.texto}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>

        <Text style={estilo.texto}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
      </View>

      <Image source={ jogos } style={ estilo.img} />

      </View>

      </ImageBackground>

  )};