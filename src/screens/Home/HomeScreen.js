import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { menu } from '../../config';
import MyCardMenu from '../../components/MyCardMenu';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Hola Miguel,</Text>
        <Text style={styles.subTitle}>Selecciona un opcion.</Text>
      </View>
      <View style={styles.containerRow}>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={menu}
          keyExtractor={p => p.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => <MyCardMenu menu={item} />}
          onEndReachedThreshold={0.4}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 22,
    color: '#61688B',
    marginTop: 15,
  },
  containerRow: {
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
