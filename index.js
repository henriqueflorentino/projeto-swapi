// Importa a função registerRootComponent do Expo
// Esta função é responsável por registrar o componente raiz do aplicativo
import { registerRootComponent } from 'expo';

// Importa o componente principal App do arquivo App.js
import App from './App';

// Registra o componente App como o componente raiz da aplicação
// A função registerRootComponent faz o equivalente a:
// AppRegistry.registerComponent('main', () => App);
// Ela garante que o ambiente seja configurado corretamente tanto no:
// - Expo Go (para desenvolvimento)
// - Quanto em builds nativas (para produção)
registerRootComponent(App);