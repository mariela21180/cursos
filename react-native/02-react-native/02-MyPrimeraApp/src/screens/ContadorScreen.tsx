import React from 'react'
import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 40,
          textAlign: 'center'
        }}>Contador: {contador}</Text>
        <Button
            onPress={() => setContador(contador + 1)}
            title="+1"
        />
        <Button
            onPress={() => setContador(contador - 1)}
            title="-1"
        />
    </View>
  )
}
