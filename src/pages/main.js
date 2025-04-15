// Importações necessárias
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Alert, Switch, View, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native'; 
import { styles, theme } from '../../styles.js'; 

export default function Main() {
  // Estados do componente
  const [loading, setLoading] = useState(false); 
  const [searchText, setSearchText] = useState(''); 
  const [localPersonagens, setLocalPersonagens] = useState([]); 
  const navigation = useNavigation(); 

  // Configura o botão de logout no header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={handleLogout}
          style={{ marginRight: 15 }}
        >
          <Icon name="logout" size={24} color={theme.colors.secondary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Função para fazer logout
  const handleLogout = () => {
    navigation.replace('Login'); // Substitui a pilha de navegação
  };

  // Busca personagem na API SWAPI
  const buscarPersonagem = async () => {
    if (!searchText.trim()) {
      Alert.alert('Aviso', 'Digite um nome para buscar');
      return;
    }

    setLoading(true);
    try {
      // Faz a requisição à API
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchText}`);
      
      if (response.data.results.length > 0) {
        // Cria novo personagem com dados adicionais
        const novoPersonagem = {
          ...response.data.results[0], // Copia os dados da API
          liberado: false, // Status inicial
          motivoBloqueio: "VISITANTE NÃO AUTORIZADO - ORDEM IMPERIAL TC-042"
        };
        // Adiciona à lista local
        setLocalPersonagens([...localPersonagens, novoPersonagem]);
        setSearchText(''); // Limpa o campo de busca
      } else {
        Alert.alert('Aviso', 'Nenhum personagem encontrado');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar personagem');
    } finally {
      setLoading(false);
    }
  };

  // Remove personagem da lista
  const removerPersonagem = (index) => {
    const novaLista = [...localPersonagens];
    novaLista.splice(index, 1); // Remove o item pelo índice
    setLocalPersonagens(novaLista);
  };

  // Alterna status de liberado/barrado
  const toggleEntrada = (index) => {
    const novaLista = [...localPersonagens];
    novaLista[index].liberado = !novaLista[index].liberado; // Inverte o status
    setLocalPersonagens(novaLista);
  };

  // Navega para tela de detalhes
  const verDetalhes = (item) => {
    navigation.navigate('Detalhes', { personagem: item });
  };

  // Renderização do componente
  return (
    <View style={styles.container}>
      {/* Área de busca */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar personagem..."
          placeholderTextColor={theme.colors.placeholder}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={buscarPersonagem} // Dispara ao pressionar Enter
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={buscarPersonagem}
          disabled={loading}
        >
          <Icon name="add" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Indicador de loading ou lista de personagens */}
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.secondary} />
      ) : (
        <FlatList
          data={localPersonagens}
          keyExtractor={(item, index) => index.toString()} // Chave única para cada item
          renderItem={({ item, index }) => (
            // Card do personagem
            <View style={[
              styles.card,
              { 
                // Borda esquerda colorida conforme status
                borderLeftWidth: 5, 
                borderLeftColor: item.liberado ? theme.colors.success : theme.colors.error 
              }
            ]}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardText}>Altura: {item.height} cm</Text>
              <Text style={styles.cardText}>Peso: {item.mass} kg</Text>
              <Text style={styles.cardText}>Status: {item.liberado ? "✅ Liberado" : "❌ Barrado"}</Text>
              
              {/* Mostra motivo se estiver barrado */}
              {!item.liberado && (
                <Text style={styles.cardText}>Motivo: {item.motivoBloqueio}</Text>
              )}

              {/* Botões de ação */}
              <View style={styles.buttonRow}>
                <TouchableOpacity 
                  style={[styles.button, styles.detailButton]}
                  onPress={() => verDetalhes(item)}
                >
                  <Text style={styles.buttonText}>🔍 Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => removerPersonagem(index)}
                >
                  <Text style={styles.buttonText}>🗑️ Remover</Text>
                </TouchableOpacity>
              </View>
              
              {/* Switch para alternar status */}
              <View style={styles.switchContainer}>
                <Switch
                  value={item.liberado}
                  onValueChange={() => toggleEntrada(index)}
                  thumbColor={item.liberado ? theme.colors.success : theme.colors.error}
                />
              </View>
            </View>
          )}
          // Componente exibido quando a lista está vazia
          ListEmptyComponent={
            <View style={styles.card}>
              <Text style={[styles.cardTitle, { textAlign: 'center' }]}>Nenhum personagem adicionado</Text>
              <Text style={[styles.cardText, { textAlign: 'center' }]}>Busque por personagens para começar</Text>
            </View>
          }
        />
      )}
    </View>
  );
}