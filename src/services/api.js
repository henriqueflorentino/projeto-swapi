// Importa a biblioteca Axios, usada para fazer requisições HTTP (como GET, POST, etc.)
import axios from 'axios';

// Cria uma instância configurada do Axios com uma URL base para a API da Star Wars (SWAPI)
const api = axios.create({
  baseURL: 'https://swapi.dev/api/', // Define a URL base para todas as requisições
});

// Exporta a instância configurada para ser usada em outros arquivos do projeto
export default api;