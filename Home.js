import React from 'react'
import { Text, View ,Image, StyleSheet , TouchableOpacity} from 'react-native'
import ListVehicules from './ListVehicules'
import cars from './cars'

export default function Home(props){

  return (
    <TouchableOpacity 
    style={styles.center} 
    onPress={()=> props.navigation.navigate('ListVehicules')} >
        <Image style={styles.image} source={require("./img/hero.jpg")}/>
        <Text style={styles.text}>{cars.length} Véhicules à découvrir </Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    center:{
        alignItems: 'center'
    },
    image:{
        marginTop:20,
        width:350,
        height:170,
        borderRadius:10
    },
    text:{
        color:'white',
        fontSize:25,
        position:'absolute',
        top:150,
        left:35
    }

})