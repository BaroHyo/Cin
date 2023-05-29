import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

export function Input({ ...otherProps }) {

    const [focused, setFocused] = useState(false);

    return (
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={[
                styles.input,
                focused && {
                    borderWidth: 2,
                    borderColor: "#f57c00",
                    shadowOffset: { width: 4, height: 10 },
                    shadowColor: "#f57c00",
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                },
            ]}
            {...otherProps}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
});
