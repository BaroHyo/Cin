import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Center } from 'native-base';
import { Card } from '../../components';
import { menu } from '../../config';

export function HomeScreen() {
  return (
    <Center flex={1}>
      <FlatList
        data={menu}
        keyExtractor={p => p.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => <Card menu={item} />}
        onEndReachedThreshold={0.4}
      />
    </Center>
  );
}
