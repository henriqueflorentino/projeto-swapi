// Importações necessárias
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, ActivityIndicator, View } from 'react-native';
import axios from 'axios'; // Biblioteca para requisições HTTP
import { styles, theme } from '../../styles.js'; 

// Componente de detalhes do personagem
export default function Detalhes({ route }) {
  // Recebe o personagem passado como parâmetro de navegação
  const { personagem } = route.params;

  // Estados para armazenar informações adicionais
  const [especie, setEspecie] = useState('Carregando...');
  const [planeta, setPlaneta] = useState('Carregando...');
  const [loading, setLoading] = useState(true); 

  // Efeito que roda quando o componente é montado ou quando o personagem muda
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Verifica se o personagem tem espécie definida
        if (personagem.species && personagem.species.length > 0) {
          // Faz requisição para obter detalhes da espécie
          const especieResponse = await axios.get(personagem.species[0]);
          setEspecie(especieResponse.data.name);
        } else {
          // Valor padrão caso não tenha espécie definida
          setEspecie('Humano');
        }

        // Verifica se o personagem tem planeta natal definido
        if (personagem.homeworld) {
          // Faz requisição para obter detalhes do planeta
          const planetaResponse = await axios.get(personagem.homeworld);
          setPlaneta(planetaResponse.data.name);
        }
      } catch (error) {
        // Em caso de erro, define valores padrão
        setEspecie('Desconhecida');
        setPlaneta('Desconhecido');
      } finally {
        // Finaliza o carregamento independente do resultado
        setLoading(false);
      }
    };

    // Chama a função para buscar os detalhes
    fetchDetails();
  }, [personagem]); // Dependência: executa novamente se o personagem mudar

  // Exibe um indicador de carregamento enquanto os dados são buscados
  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={theme.colors.secondary} />
      </View>
    );
  }

  // Renderização da tela de detalhes
  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <Text style={styles.detailTitle}>📝 FICHA IMPERIAL</Text>
      
      {/* Container com os detalhes do personagem */}
      <View style={styles.detailCard}>
        {/* Nome */}
        <Text style={styles.detailLabel}>Nome:</Text>
        <Text style={styles.detailValue}>{personagem.name}</Text>

        {/* Altura */}
        <Text style={styles.detailLabel}>Altura:</Text>
        <Text style={styles.detailValue}>{personagem.height} cm</Text>

        {/* Peso */}
        <Text style={styles.detailLabel}>Peso:</Text>
        <Text style={styles.detailValue}>{personagem.mass} kg</Text>

        {/* Gênero */}
        <Text style={styles.detailLabel}>Gênero:</Text>
        <Text style={styles.detailValue}>{personagem.gender}</Text>

        {/* Ano de nascimento */}
        <Text style={styles.detailLabel}>Ano de nascimento:</Text>
        <Text style={styles.detailValue}>{personagem.birth_year}</Text>

        {/* Espécie (obtida via API) */}
        <Text style={styles.detailLabel}>Espécie:</Text>
        <Text style={styles.detailValue}>{especie}</Text>

        {/* Planeta (obtido via API) */}
        <Text style={styles.detailLabel}>Planeta de origem:</Text>
        <Text style={styles.detailValue}>{planeta}</Text>

        {/* Status (liberado/barrado) */}
        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={[styles.detailValue, { 
          color: personagem.liberado ? theme.colors.success : theme.colors.error 
        }]}>
          {personagem.liberado ? 'LIBERADO' : 'BARRADO'}
        </Text>

        {/* Motivo do bloqueio (se aplicável) */}
        {!personagem.liberado && (
          <>
            <Text style={styles.detailLabel}>Motivo:</Text>
            <Text style={styles.detailValue}>{personagem.motivoBloqueio}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}