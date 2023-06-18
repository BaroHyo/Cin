import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyCardMenu = ({ menu }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menu.screen)}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{menu.nombre}</Text>
        </View>
        <View style={styles.containerImage}>
          <Image source={menu.icon} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#FF7043',
    marginHorizontal: 5,
    width: windowWidth / 2 - 30,
    height: windowHeight / 7,
    paddingTop: 25,
    paddingLeft: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: 10,
  },
  containerImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    width: 58,
    height: 58,
    position: 'absolute',
    right: 2,
    bottom: 9,
  },
});

export default MyCardMenu;
