import * as React from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions, Image} from 'react-native';
import {Card} from '../../components';
import {menu} from '../../config';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CardMenu = ({menu}) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{
                marginVertical: 10,
                backgroundColor: 'grey',
                marginHorizontal: 5,
                width: windowWidth / 2 - 30,
                height: windowHeight / 7,
                paddingTop: 25,
                paddingLeft: 20,
                borderRadius: 15,
                overflow: 'hidden',
            }}>
                <View>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        //top: 2,
                        //left: 2,
                    }}>
                        {menu.nombre}
                    </Text>
                </View>
                <View style={{
                    width: 100,
                    height: 100,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                   //overflow: 'hidden',
                   //opacity: 0.5,
                }}>
                    {/*<Image*/}
                    {/*    source={menu.icon}*/}
                    {/*    style={{*/}
                    {/*        width: 80,*/}
                    {/*        height: 80,*/}
                    {/*        position: 'absolute',*/}
                    {/*        right: -10,*/}
                    {/*        bottom: -8,*/}

                    {/*    }}*/}
                    {/*/>*/}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function HomeScreen() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 20
        }}>
            <View style={{marginTop: 20}}>
                <Text style={{fontSize: 28, fontWeight: 'bold'}}>Hola Miguel,</Text>
                <Text style={{fontSize: 22, color: '#61688B', marginTop: 15}}>
                    Find a couser you want to learn
                </Text>
            </View>
            <View style={{
                paddingVertical: 25,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Menu</Text>
            </View>
            <View style={{flex: 1,}}>
                <FlatList
                    data={menu}
                    keyExtractor={p => p.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item}) => <CardMenu menu={item}/>}
                    onEndReachedThreshold={0.4}
                />
            </View>
        </SafeAreaView>

    );
}
