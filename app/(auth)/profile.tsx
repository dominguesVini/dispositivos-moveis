import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Para navegação

const Profile = () => {
  const router = useRouter();

  const handleLogout = () => {

    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      
      {/* Lista com informações do usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome: João Silva</Text>
        <Text style={styles.infoText}>Email: joao@example.com</Text>
        {/* Adicione mais informações aqui, se necessário */}
      </View>

      {/* Botão de Logout */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Profile;
