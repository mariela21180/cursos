import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Contador: {contador}</Text>
        <Fab 
            onPress={() => setContador(contador - 1)}
            title="-1"
            position="left"
            />
        <Fab 
            onPress={() => setContador(contador + 1)}
            title="+1"
            position="right"
        />
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
});