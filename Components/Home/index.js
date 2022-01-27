import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';

import Logo from '../../assets/img/xbox.png';
import Consoles from '../../assets/img/consoles.png';
import Jogos from '../../assets/img/halo.jpg';
import Cloud from '../../assets/img/cloud.jpg';

import estilo from './estilo';

export default function Home(props) {
  return (
      <View style={estilo.container}>

        <Image source={Logo} style={estilo.img} />

        <View style={estilo.texto}>
          <Text style={estilo.paragrafo}> Xbox é uma marca de consoles criada pela Microsoft.
          Toque nos cards para conhecer.</Text>
        </View>

        <View style={estilo.divCard}>

          <Pressable
            style={ estilo.btn }
            onPress= { () => props.navigation.navigate("Console")}>
            <Image source={ Consoles } style={estilo.imgbox} />
            <Text style={ estilo.box}>Conheça os consoles</Text>
          </Pressable>

          <Pressable
          style={ estilo.btn }
          onPress= { () => props.navigation.navigate("Jogos")}>
            <Image source={ Jogos } style={estilo.imgbox} />
            <Text style={ estilo.box}>Conheça os jogos</Text>
          </Pressable>

          <Pressable
          style={ estilo.btn }
          onPress= { () => props.navigation.navigate("Nuvem")}>
            <Image source={ Cloud } style={estilo.imgbox} />
            <Text style={ estilo.box}>Conheça o xCloud</Text>
          </Pressable>

          </View>

      </View>

  )};