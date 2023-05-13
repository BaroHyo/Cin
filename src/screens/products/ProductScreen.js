import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from 'native-base';
import { FlatList, View } from 'react-native';

const CardProducto = () => {
  return (
    <Box alignItems="center">
      
    </Box>
  );
};

const producto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export function ProductScreen() {
  return (
    <Center flex={1}>
      <FlatList
        data={producto}
        keyExtractor={(p, i) => i}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => <CardProducto />}
        onEndReachedThreshold={0.4}
      />
    </Center>
  );
}
