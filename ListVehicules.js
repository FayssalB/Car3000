import React, { useState } from 'react'
import { FlatList, Image, Modal, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import cars from './cars'


const ListVehicules = (props) => {

    const allCar = (item) => {
        return (
            <TouchableOpacity
                style={styles.row}
                onPress={() => props.navigation.navigate('CarDetails', { item })}
            >
                <Image style={styles.carImage} source={{ uri: item.image }} />
                <View style={styles.fle}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.price}€ par jour</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // const [isVisible, setIsVisible] = useState(true)
    // const filterPress = () => setIsVisible(!isVisible)    

    return (
        <View>
            <View><FilterCar opa={1}/></View>
            <FlatList
                keyExtractor={item => item.id}
                data={cars}
                renderItem={({ item }) => allCar(item)}
                numColumns={1}
            />
        </View>
    );
}

export const FilterCar = ({opa}) => {

    const [isAuto, setIsAuto] = useState(false);
    const [isClim, setIsClim] = useState(false);
    const toggleSwitchAuto = () => setIsAuto(!isAuto);
    const toggleSwitchClim = () => setIsClim(!isClim);

    const [isOpac, setIsOpac] = useState(1)

    const change = () => {
        isOpac == 0 ? setIsOpac(1) : setIsOpac(0) 
    }
    return (
        
            <View style={{opacity: opa}}>

                {/* PRICE FILTER */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    <Text style={styles.filterText}>Prix</Text>

                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Min'
                    />

                    <Text style={styles.filterText}>-</Text>

                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Max' />
                </View>

                {/* SWITCH ZONE */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    <Text style={styles.filterText}>Automatique</Text>

                    <Switch
                        value={isAuto} onValueChange={toggleSwitchAuto}
                    />

                    <Text style={styles.filterText}>Climatisation</Text>
                    <Switch
                        value={isClim} onValueChange={toggleSwitchClim}
                    />
                </View>
            </View>
    )
}

export default ListVehicules


const styles = StyleSheet.create({
    carImage: {
        flex: 1,
        width: 100,
        height: 100,
    },
    fle: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#CBD8E1',
        paddingTop: 15,
        paddingBottom: 25,
        marginHorizontal: 10
    },
    center: {
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        width: 100,
        height: 50,
        borderWidth: 1,
        borderColor: '#195380',
        borderRadius: 15,
        marginVertical: 20,
        textAlign: 'center'
    },
    filterText: {
        fontSize: 12,
    }


});