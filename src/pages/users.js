// Importa as bibliotecas necessárias
import React from 'react';
import { View, Text } from 'react-native'; 
import { styles } from '../../styles.js'; 

// Define a função do componente `Users`, que recebe a prop `route` (vinda da navegação)
export default function Users({ route }) {
  // Extrai o parâmetro `personagem` passado pela navegação (ex: ao clicar em um personagem na lista)
  const { personagem } = route.params;

  // Retorna a estrutura da tela de detalhes do personagem
  return (
    <View style={styles.userContainer}> {/* Container principal com estilos aplicados */}
      <Text style={styles.userTitle}>{personagem.name}</Text> {/* Nome do personagem (estilo de título) */}
      
      {/* Dados do personagem (cada um com estilo `userText`) */}
      <Text style={styles.userText}>Altura: {personagem.height} cm</Text>
      <Text style={styles.userText}>Peso: {personagem.mass} kg</Text>
      <Text style={styles.userText}>Cor dos olhos: {personagem.eye_color}</Text>
      <Text style={styles.userText}>Cor do cabelo: {personagem.hair_color}</Text>
      <Text style={styles.userText}>Gênero: {personagem.gender}</Text>
      <Text style={styles.userText}>Nascimento: {personagem.birth_year}</Text>
      <Text style={styles.userText}>Espécie: {personagem.species}</Text>
      <Text style={styles.userText}>Planeta de origem: {personagem.homeworld}</Text>
    </View>
  );
}