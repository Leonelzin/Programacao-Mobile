import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation(); // Use o hook useNavigation para acessar a navegação

  const handleStartSleepRegulation = () => {
    // Navegue para a tela de formulário
    navigation.navigate('Formulario');
  };

  const handleSetLocationManually = () => {
    Alert.prompt(
      'Definir Localização Manualmente',
      'Insira a latitude e a longitude separadas por vírgula (ex: 12.345, -67.890)',
      (text) => {
        const [lat, long] = text.split(',').map((coord) => parseFloat(coord.trim()));

        if (!isNaN(lat) && !isNaN(long)) {
          // Você pode fazer algo com a latitude e longitude inseridas aqui, se necessário
        } else {
          Alert.alert('Erro', 'Por favor, insira valores de latitude e longitude válidos.');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {/* Sua logo aqui */}
      <Image
        source={require('./logonenem.png')} // Substitua pelo caminho da imagem da sua logo
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo ao Sleep Better</Text>
      <Text style={styles.description}>
        O Sleep Better é seu parceiro para uma noite de sono mais saudável e revigorante.
        Monitore seu sono, crie rotinas saudáveis e experimente a diferença em sua vida.
      </Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleStartSleepRegulation}>
        <Text style={styles.getStartedButtonText}>Comece a Regular o Sono</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.manualLocationButton} onPress={handleSetLocationManually}>
        <View style={styles.iconContainer}>
          <Icon name="map-pin" size={20} color="#fff" />
          <Text style={styles.manualLocationButtonText}>Definir Localização Manualmente</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200, // Ajuste a largura da logo conforme necessário
    height: 200, // Ajuste a altura da logo conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  getStartedButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  manualLocationButton: {
    marginTop: 10,
    backgroundColor: '#ff9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualLocationButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
