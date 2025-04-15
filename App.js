// Importa as bibliotecas necessárias do React e React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

// Importa as telas do aplicativo
import Login from './src/pages/login'; 
import Cadastro from './src/pages/cadastro'; 
import Main from './src/pages/main'; 
import Detalhes from './src/pages/detalhes'; 

// Cria uma instância do Stack Navigator para gerenciar a navegação em pilha
const Stack = createStackNavigator();

// Componente principal do aplicativo
const App = () => {
  return (
    // Container que envolve todo o sistema de navegação
    <NavigationContainer>
      {/* Configuração do navegador em pilha */}
      <Stack.Navigator
        initialRouteName="Login" // Define a tela inicial como Login
        // Configurações padrão para todas as telas
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212', 
          },
          headerTintColor: '#FFD700', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      >
        {/* Configuração da tela de Login */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ 
            headerShown: false, 
            animationEnabled: false 
          }} 
        />
        
        {/* Configuração da tela de Cadastro */}
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ 
            title: 'Cadastro de Oficial', 
            headerBackTitleVisible: false 
          }} 
        />
        
        {/* Configuração da tela Principal */}
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{ 
            title: 'Controle de Acesso', 
            headerLeft: null, 
            gestureEnabled: false 
          }} 
        />
        
        {/* Configuração da tela de Detalhes */}
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ 
            title: 'Detalhes do Visitante', 
            headerBackTitleVisible: false 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporta o componente App como padrão
export default App;