#  Stormtrooper OS - Controle Imperial de Visitantes
### Desenvolvido por Henrique Almeida Florentino 

<p align="center">
  <img src="https://github.com/henriqueflorentino/projeto-swapi/blob/main/assets/logostorm.png" width="300" />
</p>

>Bem-vindo(a) ao Stormtrooper OS, um sistema desenvolvido com tecnologia imperial de ponta para o gerenciamento de visitantes em bases do Império Galáctico. Cadastre recrutas, monitore acessos e decida quem entra ou não nas instalações... com um simples toque no seu datapad 

---

### ⚙️ Funcionalidades Imperiais:

#### 🔐 Login
- Autenticação com credenciais imperiais
- Armazenamento seguro usando **AsyncStorage**

#### 📝 Cadastro de Oficiais
- Nome completo
- Identificação CPF/ID Imperial
- Classificação ou Curso de Treinamento

#### 🕵️ Painel de Controle
- Busca inteligente de personagens na **SWAPI**
- Cards contendo:
  - Status de acesso (✅ Liberado / ❌ Barrado)
  - Motivo do bloqueio (gerado automaticamente)
  - Troca de permissões em tempo real

#### 📋 Ficha Técnica do Visitante
- Espécie
- Planeta de origem
- Data de nascimento (formato galáctico BBY/ABY)
- Biometria (altura e peso)

---

### 🛠 Tecnologias do Império:

| Tecnologia         | Finalidade                             |
|--------------------|----------------------------------------|
| React Native       | Interface mobile                       |
| SWAPI              | Base de dados galáctica                |
| Axios              | Comunicação interestelar               |
| React Navigation   | Navegação entre setores                |
| AsyncStorage       | Armazenamento seguro local             |

---

### 📦 Requisitos de Instalação:

Antes de iniciar a jornada pelo Império, certifique-se de ter os seguintes recursos no seu terminal:

- Node.js versão 16 ou superior  
- App **Expo Go** instalado no seu celular (Android ou iOS)  
- Conexão ativa com a HoloNet (Internet)

---

### 🚀 Como iniciar o Stormtrooper OS com o Expo:

```bash
# Clone o repositório imperial
git clone https://github.com/henriqueflorentino/projeto-swapi.git

# Acesse a base imperial
cd projeto-swapi

# Instale as dependências galácticas
npm install

# Inicie o sistema
npx expo start

