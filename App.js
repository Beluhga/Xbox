import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Components/Home/';
import Console from './Components/console/';
import Jogos from './Components/jogos/';
import Nuvem from './Components/nuvem/';

const Stack= createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component= {Home} />
        <Stack.Screen name="Console" component= {Console} />
        <Stack.Screen name="Jogos" component= {Jogos} />
        <Stack.Screen name="Nuvem" component= {Nuvem} />
      </Stack.Navigator>
    </NavigationContainer>
  
  )};
