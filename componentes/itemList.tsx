
import React from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import Componente from './componente';
import { Item, mockData } from '../mock/mockDados';
import Card from './Card';

const ItemList: React.FC = () => {
  const handleItemPress = (carName: string) => {
    Alert.alert(
        'Carro Selecionado',
        `Você clicou no ${carName}`,
        [{ text: 'OK' }]
      );
  };

  const renderItem = ({ item }: { item: Item }) => (
    <Card>
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Componente title={item.description} onPress={() => handleItemPress(item.title)} />
      </Card.Body>
      <Card.Footer>Data: {item.createdAt}</Card.Footer>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ItemList;
