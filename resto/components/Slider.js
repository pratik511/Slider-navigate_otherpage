/* eslint-disable prettier/prettier */
import React, { useState ,useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Dimensions, FlatList ,Platform } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5; //60%

const image = [
    'https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/209788/pexels-photo-209788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2673471/pexels-photo-2673471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/316820/pexels-photo-316820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/745266/pexels-photo-745266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3263416/pexels-photo-3263416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/33227/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const Slider = () => {
    const [active, setActive] = useState(0);
    const [filterData, setFilerData] = useState([]);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        console.log("slide", slide);
        console.log("nativeEvent", nativeEvent);
        if (slide !== active) {
            setActive(slide);
        }
    }

    useEffect(() => {
        fetchPosts();
        return () => {
         };
 
    }, []);

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
            .then(response => response.json())
            .then(responseJson => {
                setFilerData(responseJson);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const ItemView = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.GridViewBlockStyle}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={{paddingLeft:7 ,paddingRight:7 ,paddingTop:5 }}>
                        {item.id}
                        {'. '}
                        {item.title.toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <ScrollView>
            {/* Slider */}
            <View style={styles.container}>
                <ScrollView pagingEnabled onScroll={change} showsHorizontalScrollIndicator={false} horizontal style={{ width, height }}>
                    {
                        image.map((image, index) =>
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.image}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.pagignation}>
                    {
                        image.map((i, k) =>
                            <Text key={k} style={k == active ? styles.pagignationavtivetext : styles.pagignationtext}>&#8226;</Text>
                        )
                    }
                </View>
            </View>
            {/* Flatelist  */}
            <View>
                <Text style={{alignSelf:"center",fontSize:50}}>Hello</Text>
               <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    //   ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    );
};

export default Slider;

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
    pagignation: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    pagignationtext: {
        color: '#888',
        // fontSize: 50,
        fontSize: width / 8,
        marginBottom: width / (-20),
    },
    pagignationavtivetext: {
        color: 'white',
        fontSize: width / 8,
        marginBottom: width / (-20),
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    },
    tinyLogo: {
        width: 150,
        height: 120,
        borderRadius:3,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    GridViewBlockStyle: {
        borderWidth: 2,
        // justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 210,
        margin: 3,
        padding: 3,
        backgroundColor: '#00BCD4',
        borderRadius:4,
    },
    flat: {
        borderWidth: 2,
        borderColor: 'skyblue',
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 1,
    },
    itemStyle: {
        padding: 10,
    },
    TextInputStyle: {
        height: 60,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        fontSize: 18,
        borderColor: '#009688',
        backgroundColor: 'white',
        borderRadius: 20,
    },
});
