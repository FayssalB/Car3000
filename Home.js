import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Button } from 'react-native'
import ListVehicules from './ListVehicules'
import cars from './cars'

export default function Home(props) {
    const mostLiked = (item) => {
        if (item.reservations >= 7) {
            return (
                <View >
                    <Image style={{ width: vw / 2, height: 100 }} source={{ uri: item.image }} />
                    <Text>{item.name}</Text>
                    <Text>{item.price}€ par jour</Text>
                    <Button title='Reserver' 
                    onPress={()=> props.navigation.navigate('CarDetails', { item })} />

                </View>
            )

        }
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.center}
                onPress={() => props.navigation.navigate('ListVehicules')} >
                <Image style={styles.image} source={require("./img/hero.jpg")} />
                <Text style={styles.text}>{cars.length} Véhicules à découvrir </Text>

            </TouchableOpacity>
            <View >
                <Text>Les plus réservés</Text>
                <FlatList
                    
                    keyExtractor={item => item.id}
                    data={cars}
                    renderItem={({ item }) => mostLiked(item)}
                    numColumns={2}
                />
            </View>
        </View>

    )
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    image: {
        marginTop: 20,
        width: 350,
        height: 170,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 25,
        position: 'absolute',
        top: 150,
        left: 35
    }

})