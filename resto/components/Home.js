/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Home = ({navigation}) => {

    return (
        <View >
        <Text style={styles.headerText}>Resto Home</Text>
        <View style={styles.tapWrapper}>
            <Text onPress={() => navigation.navigate('List')} style={styles.tap}>Add</Text>
            <Text style={styles.tap}>List</Text>
            <Text onPress={() => navigation.navigate("Slider")} style={styles.tap}>Slider</Text>
            <Text style={styles.tap}>Edit</Text>
            <Text style={styles.tapLogin}>Login</Text>
        </View>
    </View>
    );
};


const styles = StyleSheet.create({
    body: {
        backgroundColor: "#333",
        flex: 1
      },
    headerText: {
        // color: '#fff',
        color: 'black',
        fontSize: 50,
        alignSelf: 'center',
        marginTop: 20,
        alignItems: "center",
    },
    tap: {
        backgroundColor: "blue",
        width: 120,
        height: 120,
        margin: 2,
        lineHeight: 110,
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
    },
    tapLogin: {
        backgroundColor: "blue",
        width: 244,
        height: 40,
        margin: 2,
        lineHeight: 40,
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
    },
    tapWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 65,
    },
});


export default Home;