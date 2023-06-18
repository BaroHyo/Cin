import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

const producto = [1, 2, 3, 4, 5];
const width = Dimensions.get('screen').width / 2 - 30;

export function ProductScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      }}
    ></SafeAreaView>
    // <View style={{flex: 1}}>
    //     <FlatList
    //         columnWrapperStyle={{justifyContent: 'space-between'}}
    //         data={producto}
    //         keyExtractor={(p, i) => i}
    //         showsVerticalScrollIndicator={false}
    //         contentContainerStyle={{
    //             marginTop: 10,
    //             paddingBottom: 50,
    //         }}
    //         numColumns={2}
    //         renderItem={({item}) => (
    //             <TouchableOpacity onPress={() => navigation.navigate('Detalle')}>
    //                 <View style={styles.card}>
    //                     <View
    //                         style={{
    //                             height: 100,
    //                             alignItems: 'center',
    //                         }}
    //                     >
    //
    //                     </View>
    //                     <Text style={styles.texto}>
    //                         Nombre Producto
    //                     </Text>
    //                     <View
    //                         style={{
    //                             flexDirection: 'row',
    //                             justifyContent: 'space-between',
    //                             marginTop: 3,
    //                         }}
    //                     >
    //                         <Text style={{
    //                             fontSize: 18,
    //                             fontWeight: 'bold'
    //                         }}>
    //                             Bs 60
    //                         </Text>
    //                     </View>
    //                 </View>
    //             </TouchableOpacity>
    //         )}
    //         onEndReachedThreshold={0.4}
    //     />
    // </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: '#e5e5e5',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  texto: {
    fontSize: 24,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
