import React from 'react';
import { View, Text, Button } from 'react-native';

interface ComponentetProps {
  title: string;
  onPress: () => void;
}

const Componente: React.FC<ComponentetProps> = ({ title, onPress }) => {
  return (
    <View style={{ padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{title}</Text>
      <Button title="Clique aqui" onPress={onPress} />
    </View>
  );
};

export default Componente;
