import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ContadorScreen /> */}
      <BoxObjectModelScreen />

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

