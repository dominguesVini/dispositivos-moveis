import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ItemList from './componentes/itemList'; 

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ItemList />
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
