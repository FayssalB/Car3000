import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import cars from './cars'

const ListVehicules = (props) => {

    const allCar = (item) => {
        return (
            <TouchableOpacity 
            style={styles.row} 
            onPress={()=>props.navigation.navigate('CarDetails', {item})}
            >
                <Image style={styles.carImage} source={{ uri: item.image }} />
                <View style={styles.fle}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.price}€ par jour</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={item => item.id}
                data={cars}
                renderItem={({ item }) => allCar(item)}
                numColumns={1}
            />
        </View>
    );
}

export default ListVehicules


const styles = StyleSheet.create({
    carImage: {
        flex:1,
        width: 100,
        height: 100,
    }, 
    fle:{
        flex:1
    },
    row:{
        flexDirection:'row', 
        flex: 1,
        marginTop:20,
        borderRadius:10,
        backgroundColor:'#CBD8E1',
        paddingTop:15,
        paddingBottom:25,
        marginHorizontal:10
    }, 
    center:{
        alignItems: 'center'
    },
    title:{
        fontSize:15,
        fontWeight:'bold'
    }


});