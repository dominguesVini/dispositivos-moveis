// Card.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode; 
}

const Card: React.FC<CardProps> & {
  Header: React.FC<{ children: React.ReactNode }>; 
  Body: React.FC<{ children: React.ReactNode }>;   
  Footer: React.FC<{ children: React.ReactNode }>;
} = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

// Definindo as partes do Card
Card.Header = ({ children }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{children}</Text>
  </View>
);

Card.Body = ({ children }) => (
  <View style={styles.body}>
    <Text style={styles.bodyText}>{children}</Text>
  </View>
);

Card.Footer = ({ children }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  header: {
    padding: 8,
    backgroundColor: '#f1f1f1',
  },
  body: {
    padding: 16,
  },
  footer: {
    padding: 8,
    backgroundColor: '#f1f1f1',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'right',
  },
});

export default Card;
