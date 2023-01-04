import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CarDetails from './CarDetails';
import Home from './Home';
import ListVehicules from './ListVehicules';
import cars from './cars';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [items, setItems] = useState({cars})
  return (
    
    <NavigationContainer>
      <Text>{items.cars[0].name}</Text>
      <StatusBar style='auto' />

      <Stack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: "#195380"
        }
      }}>

      <Stack.Screen name=' ' component={Home} options={{
        headerLeft: () => (
          <Image style={styles.imghead} source={require("./img/logo-transparent.png")} />
        )
      }}/>

      <Stack.Screen name='ListVehicules' component={ListVehicules} options={{title:'Nos véhicules'}} />

      <Stack.Screen name='CarDetails' component={CarDetails}  options={{title:'...'}} /> 

      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  imghead: {
    width: 50,
    height: 50,
    marginLeft: 150
  },
});
