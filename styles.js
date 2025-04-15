import { StyleSheet } from 'react-native';


export const fonts = {
  BebasNeue: {
    regular: 'BebasNeue-Regular', // Fonte estilizada para títulos
  },
  SpecialElite: {
    regular: 'SpecialElite-Regular', // Fonte para demais textos
  },
};


export const styles = StyleSheet.create({

  // ========== ESTILOS GERAIS ========== //

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', 
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    color: '#FFD700', 
    marginBottom: 30,
    textAlign: 'center',
  },

  // ===== ESTILOS PARA TELAS DE LOGIN & CADASTRO ===== //
  logo: {
    width: 400,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  input: {
    height: 50,
    backgroundColor: '#2d2d2d', 
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: 'white',
    borderWidth: 1,
    borderColor: '#444', 
  },
  button: {
    backgroundColor: '#FFD700', 
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#FFD700', 
    marginTop: 15,
  },

  // ===== ESTILOS PARA TELA PRINCIPAL (LISTA DE CARDS) ===== //

  searchContainer: {
    flexDirection: 'row', 
    marginBottom: 15,
  },
  searchInput: {
    flex: 1, 
    height: 40,
    backgroundColor: '#2d2d2d',
    color: 'white',
    borderRadius: 8,
    padding: 10,
  },
  searchButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2d2d2d', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', 
  },
  cardText: {
    marginTop: 5,
    color: '#EEE', 
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailButton: {
    flex: 1, 
    marginRight: 5,
  },
  deleteButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#F44336', 
  },

  // ===== ESTILOS PARA TELA DE DETALHES ===== //

  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFD700',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFF',
  },
  detailContainer: {
    flexGrow: 1, 
    padding: 20,
    backgroundColor: '#121212',
  },
  detailCard: {
    backgroundColor: '#1e1e1e', 
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  detailLabel: {
    fontSize: 16,
    color: '#FFD700', 
    marginTop: 12,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#444', 
    marginVertical: 20,
  },
  statusBox: {
    backgroundColor: '#F44336', 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 6,
    marginBottom: 10,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  // ===== ESTILOS PARA TELA DE USUÁRIOS ===== //

  userContainer: {
    padding: 20,
    backgroundColor: '#121212',
    flex: 1,
  },
  userTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFD700',
  },
  userText: {
    color: '#FFF',
    marginBottom: 10,
  },
});


export const theme = {
  colors: {
    secondary: '#FFD700', // Dourado secundário
    background: '#121212', // Cor de fundo
    cardBackground: '#2d2d2d', // Fundo de cards
    text: '#FFFFFF', // Texto principal
    error: '#F44336', // Feedback de erro
    success: '#4CAF50', // Feedback de sucesso
    placeholder: '#999999', // Texto de placeholder
  },
};