import * as React from 'react';

import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export function CustomerScreen() {

    const navigation = useNavigation()
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        navigation.setOptions({
            // headerLargeTitle: true,
            headerSearchBarOptions: {
                onChangeText: (event) => console.log(event.nativeEvent.text),
            },
        })
    }, [navigation])

    return (
        <ScrollView style={{flex: 1}}>
            <Text>CLiente</Text>
        </ScrollView>
    );
}
