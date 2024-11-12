// app/(auth)/home.tsx
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Tipo para os dados fake
interface Item {
  id: string;
  title: string;
  description: string;
}

// Dados fake para exibir
const fakeData: Item[] = [
  { id: '1', title: 'Item 1', description: 'Descrição do item 1' },
  { id: '2', title: 'Item 2', description: 'Descrição do item 2' },
  { id: '3', title: 'Item 3', description: 'Descrição do item 3' },
  { id: '4', title: 'Item 4', description: 'Descrição do item 4' },
  { id: '5', title: 'Item 5', description: 'Descrição do item 5' },
];

const Home = () => {
  const router = useRouter();

  // Função para renderizar cada item na lista
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <FlatList
        data={fakeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Home;
