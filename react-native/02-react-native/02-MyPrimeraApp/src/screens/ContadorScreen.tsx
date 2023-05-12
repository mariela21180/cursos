import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Contador: {contador}</Text>
        <TouchableOpacity
            onPress={() => setContador(contador + 1)}
        >
            <View style={styles.button}>
                <Text>+1</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setContador(contador - 1)}
        >
            <View style={styles.button}>
                <Text>-1</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 100,
    },
  });