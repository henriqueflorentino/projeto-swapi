// Importações de bibliotecas e componentes necessários
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { styles, theme } from '../../styles.js'; 
import { Image } from 'react-native'; 

// Componente Login
export default function Login({ navigation }) {
  // Estados para controlar os inputs e o loading
  const [usuario, setUsuario] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [loading, setLoading] = useState(false); 

  // Função para lidar com o login
  const handleEntrar = async () => {
    setLoading(true); 
    try {
      // Validação básica dos campos
      if (!usuario || !senha) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return; 
      }

      // Busca usuários salvos no AsyncStorage
      const usuariosSalvos = await AsyncStorage.getItem('@usuarios');
      
      // Verifica se existem usuários cadastrados
      if (!usuariosSalvos) {
        Alert.alert('Erro', 'Nenhum usuário cadastrado');
        return;
      }

      // Converte a string JSON para objeto JavaScript
      const usuarios = JSON.parse(usuariosSalvos);
      // Procura um usuário com email e senha correspondentes
      const usuarioValido = usuarios.find(u => u.email === usuario && u.senha === senha);

      // Se encontrou o usuário, navega para a tela principal
      if (usuarioValido) {
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas');
      }
    } catch (error) {
      // Tratamento de erros genéricos
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    } finally {
      setLoading(false); 
    }
  };

  // Se estiver em loading, mostra um indicador de atividade
  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  // Renderização da interface do login
  return (
    <View style={styles.container}>
      {/* Logo do app */}
      <Image 
        source={require('../../assets/logostorm.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>LOGIN IMPERIAL</Text>
      
      {/* Input de email */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={theme.colors.placeholder}
        value={usuario}
        onChangeText={setUsuario} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />
      
      {/* Input de senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={theme.colors.placeholder}
        secureTextEntry 
        value={senha}
        onChangeText={setSenha}
      />
      
      {/* Botão de login */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleEntrar} 
        disabled={loading} 
      >
        {loading ? (
          <ActivityIndicator color="white" /> 
        ) : (
          <Text style={styles.buttonText}>ACESSAR</Text>
        )}
      </TouchableOpacity>
      
      {/* Botão para navegar para o cadastro */}
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]} 
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}