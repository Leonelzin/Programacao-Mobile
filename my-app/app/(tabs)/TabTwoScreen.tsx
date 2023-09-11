import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TabTwoScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    // Implemente a lógica de cadastro aqui
    // Você pode enviar os dados de cadastro (nome de usuário, senha, email) para um servidor ou armazená-los localmente
    navigation.navigate('Home'); // Navega para a tela Home após o cadastro bem-sucedido
  };

  // Função para navegar para a tela de login
  const navigateToLogin = () => {
    navigation.navigate('TabOneScreen'); // 'TabOneScreen' é o nome da tela de login
  };

  return (
    <View style={styles.container}>
      {/* Seu logotipo aqui */}
      <Image
        source={require('./meulogo.png')} // Substitua pelo caminho da imagem do seu logotipo
        style={styles.logo}
      />

      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.signinLink}>Faça login agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100, // Ajuste a largura do logotipo conforme necessário
    height: 100, // Ajuste a altura do logotipo conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  signupButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signinText: {
    color: '#333',
  },
  signinLink: {
    color: '#007bff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
