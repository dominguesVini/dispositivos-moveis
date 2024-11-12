import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ItemList from './componentes/itemList'; 
import LoginScreen from './app/index';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default App;
