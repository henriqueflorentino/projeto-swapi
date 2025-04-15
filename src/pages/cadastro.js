// Importações de bibliotecas e componentes necessários
import React, { useState } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { styles, theme } from '../../styles.js'; 

// Componente principal da tela de Cadastro
export default function Cadastro({ navigation }) {
  // Estado para armazenar os dados do formulário
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    cpf: '',
    email: '',
    curso: '',
    senha: ''
  });

  // Estado para controlar o carregamento durante o salvamento
  const [loading, setLoading] = useState(false);

  // Função para lidar com o salvamento dos dados
  const handleSalvar = async () => {
    // Validação: verifica se todos os campos estão preenchidos
    if (!dados.nome || !dados.telefone || !dados.cpf || !dados.email || !dados.curso || !dados.senha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    // Validação: verifica se o e-mail é válido (contém '@' e '.')
    if (!dados.email.includes('@') || !dados.email.includes('.')) {
      Alert.alert('Erro', 'Digite um e-mail válido');
      return;
    }

    // Validação: verifica se a senha tem pelo menos 6 caracteres
    if (dados.senha.length < 6) {
      Alert.alert('Erro', 'Senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Ativa o indicador de carregamento
    setLoading(true);

    try {
      // Busca usuários já cadastrados no AsyncStorage
      const usuariosSalvos = await AsyncStorage.getItem('@usuarios');
      const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

      // Verifica se o e-mail já está cadastrado
      if (usuarios.some(u => u.email === dados.email)) {
        Alert.alert('Erro', 'E-mail já cadastrado');
        return;
      }

      // Adiciona o novo usuário à lista
      usuarios.push(dados);
      
      // Salva a lista atualizada no AsyncStorage
      await AsyncStorage.setItem('@usuarios', JSON.stringify(usuarios));
      
      // Feedback de sucesso e volta para a tela anterior
      Alert.alert('Sucesso', 'Cadastro realizado!');
      navigation.goBack();
    } catch (error) {
      // Tratamento de erro genérico
      Alert.alert('Erro', 'Falha ao cadastrar');
    } finally {
      // Desativa o indicador de carregamento, independentemente do resultado
      setLoading(false);
    }
  };

  // Renderização da interface
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CADASTRO IMPERIAL</Text>
      
      {/* Campo de entrada para o nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor={theme.colors.placeholder}
        value={dados.nome}
        onChangeText={(text) => setDados({...dados, nome: text})}
      />
      
      {/* Campo de entrada para o telefone */}
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor={theme.colors.placeholder}
        value={dados.telefone}
        onChangeText={(text) => setDados({...dados, telefone: text})}
        keyboardType="phone-pad" 
      />
      
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor={theme.colors.placeholder}
        value={dados.cpf}
        onChangeText={(text) => setDados({...dados, cpf: text})}
        keyboardType="numeric" 
      />
      
      {/* Campo de entrada para o e-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={theme.colors.placeholder}
        value={dados.email}
        onChangeText={(text) => setDados({...dados, email: text})}
        keyboardType="email-address" 
        autoCapitalize="none" 
      />
      
      {/* Campo de entrada para o curso */}
      <TextInput
        style={styles.input}
        placeholder="Curso"
        placeholderTextColor={theme.colors.placeholder}
        value={dados.curso}
        onChangeText={(text) => setDados({...dados, curso: text})}
      />
      
      {/* Campo de entrada para a senha (oculto) */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={theme.colors.placeholder}
        secureTextEntry 
        value={dados.senha}
        onChangeText={(text) => setDados({...dados, senha: text})}
      />
      
      {/* Botão para salvar os dados */}
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSalvar}
        disabled={loading} 
      >
        {/* Mostra um indicador de carregamento ou o texto do botão */}
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>SALVAR</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}