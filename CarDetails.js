import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const CarDetails = (props) => {

    const [item, setItem] = useState(props.route.params.item);
   


    return (
        <TouchableOpacity style={{height:vh}}>
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>{item.name}</Text>
            <View>
                <Image style={styles.car} source={{ uri: item.image }} />
            </View>

            <View style={styles.mg}>

                <View style={{flexDirection: 'row', height: vh/5}}>

                    <View style={{alignItems:'center', width:vw/2}}>
                        <Image style={styles.icone} source={require("./img/icons/engine.png")} />
                        <Text>{item.options.transmission}</Text>
                    </View>

                    <View style={{alignItems:'center', width:vw/2}}>
                        <Image style={styles.icone} source={require("./img/icons/doors.png")} />
                        <Text> {item.options.person} personnes</Text>
                    </View>

                </View>

                <View style={{ flexDirection:'row'}}>

                    <View style={{alignItems:'center', width:vw/2}}>
                        <Image style={styles.icone} source={require("./img/icons/compass.png")} />
                        <Text >{item.options.navigation ? "GPS intégré" : "Pas d'option GPS"}</Text>
                    </View>

                    <View style={{alignItems:'center', width:vw/2}}>
                        <Image style={styles.icone} source={require("./img/icons/snow.png")} />
                        <Text >{item.options.aircondition ? "véhicule climatisé" : "Pas de climatisation"}</Text>
                    </View>

                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.text} >{item.price}€ par jour</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CarDetails

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({

    icone: {
        height: 35,
        width: 35,
    },
    car: {
        height: 200,
        width: 400,
        marginTop: 30,
        marginBottom: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100
    },
    mg: {
        marginTop: 50
    },
    align: {
        alignContent: 'center'
    },
    footer:{
        alignItems:'center',
        width:vw,
        height:80,
        position:'absolute',
        bottom:100,
        backgroundColor:"#195380"
    },
    text:{
       fontSize:25,
       color:'white',
       paddingTop:20
    }


});