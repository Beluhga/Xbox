import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';

import horizon from '../../assets/img/horizon.jpeg';
import cyberpunk from '../../assets/img/2077.jpg';
import halo from '../../assets/img/halo5.jpg';

import estilo from './estilo';


export default function Jogos() {
  return (
      <View style={estilo.pagina}>

        <View>

      <Text style={estilo.titulo}>Jogos em 4K</Text>
      <Text style={estilo.subtitulo}>Os principais jogos estão aqui.
         Veja abaixo três exemplos de grande sucesso.</Text>

      </View>

     
      <ScrollView>
      
        <ImageBackground source={ horizon} style={estilo.img}>
        <Text style={estilo.Boxtexto}>Forza Horizon 5</Text>
        </ImageBackground>

        <Text style={estilo.texto}>Forza Horizon 5 é um jogo de corrida.
           É o quinto jogo da série Forza Horizon e o decimo segundo título
           principal da franquia Forza. O jogo se passa em uma
           representação ficcional do México.</Text>

        <ImageBackground source={ cyberpunk} style={estilo.img}>
        <Text style={estilo.Boxtexto}>Cyberpunk 2077</Text>
        </ImageBackground>

        <Text style={estilo.texto}>Cyberpunk 2077 é um jogo eletrônico de RPG de ação
          desenvolvido e publicado pela CD Projekt.
        </Text>

        <ImageBackground source={ halo} style={estilo.img}>
        <Text style={estilo.Boxtexto}>Halo 5: Guardians</Text>
        </ImageBackground>

        <Text style={estilo.texto}>Halo 5: Guardians é um jogo de tiro em primeira pessoa, parte
          da franquia Halo e sequência de Halo 4.
        </Text>

      </ScrollView>
     

      </View>

  )};