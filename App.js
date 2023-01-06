import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CarDetails from './CarDetails';
import Home from './Home';
import ListVehicules, { FilterCar } from './ListVehicules';
import cars from './cars';



export default function App() {

  const Stack = createNativeStackNavigator();
  const [items, setItems] = useState({ cars })
  const [number, onChangeNumber] = useState(0);

  const handlePress = () => {
    return <Text>fgsf</Text>



  }
  return (

    <NavigationContainer>
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
        }} />

        <Stack.Screen name='ListVehicules' component={ListVehicules} options={{
          title: 'Nos véhicules',
          headerRight: () => (
           <Text>Filtres</Text>
          )
        }} />

        <Stack.Screen name='CarDetails' component={CarDetails} options={({ route }) => ({ title: route.params.item.name })} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  imghead: {
    width: 50,
    height: 50,
    marginLeft: 150
  },
});
