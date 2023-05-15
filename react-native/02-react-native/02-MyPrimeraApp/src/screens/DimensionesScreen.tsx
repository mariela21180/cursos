import React from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// Documentación https://reactnative.dev/docs/dimensions

// Usando el Objeto estático
// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    // Usando el hook
    const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
        <View style={{
            ...styles.cajaMorada,
            width: width * 0.20,
            }} />
        <View style={styles.cajaNaranja} />
        <Text style={styles.title}>
            W: {width}, H: {height}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: 600,
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        // width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
});

