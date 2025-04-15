// Importa as bibliotecas necessárias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Container principal de navegação
import { createStackNavigator } from '@react-navigation/stack'; // Cria navegação em pilha (Stack Navigator)

// Importa as telas do aplicativo
import Login from './pages/login'; 
import Cadastro from './pages/cadastro'; 
import Main from './pages/main'; 
import Users from './pages/users'; 
import Detalhes from './pages/detalhes'; 

// Cria uma instância do Stack Navigator para gerenciar a navegação em pilha
const Stack = createStackNavigator();

// Componente principal de rotas do aplicativo
export default function Routes() {
  return (
    <NavigationContainer> {/* Container que envolve toda a navegação */}
      <Stack.Navigator initialRouteName="Login"> {/* Define a tela inicial como "Login" */}
        
        {/* Tela de Login */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        
        {/* Tela de Cadastro */}
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ title: 'Cadastrar Usuário' }} 
        />
        
        {/* Tela Principal (Lista de Personagens) */}
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{ 
            title: 'Controle de Acesso', 
            headerStyle: {
              backgroundColor: '#121212', 
            },
            headerTintColor: '#FFD700', 
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} 
        />
        
        {/* Tela de Detalhes do Personagem */}
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ title: 'Detalhes do Personagem' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}