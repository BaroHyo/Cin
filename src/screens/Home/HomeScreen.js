import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Center } from 'native-base';
import { Card } from '../../components';

const menu = [1, 2, 3, 4, 5, 6, 7];

export function HomeScreen() {
  return (
    <Center flex={1}>
      <FlatList
        data={menu}
        keyExtractor={(p, i) => i}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => <Card />}
        onEndReachedThreshold={0.4}
      />
    </Center>
  );
}
