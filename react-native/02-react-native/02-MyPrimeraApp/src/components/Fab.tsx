import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string,
    position: 'left' | 'right'
    onPress: () => void,
}

export const Fab = ({title, onPress, position = 'left'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                onPress={onPress}
                style={[
                    styles.fabLocation,
                    (position === 'left') ? styles.left : styles.right,
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'left') ? styles.left : styles.right,
                ]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };


  return (Platform.OS === 'ios') ? ios() : android();
};


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        // left: props.location === 'left' ? 25 : 'auto'
    },
    left: {
        left: 25,
    },
    right: {
        right: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width:60,
        height:60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
