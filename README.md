# Portfólio Moderno - Alisson Rolim

## 🚀 Sobre o Projeto

Este é um portfólio web moderno e responsivo desenvolvido com React, Tailwind CSS e Framer Motion. O projeto foi completamente modernizado com:

- **Design Moderno**: Cores vibrantes baseadas nas tendências de 2025
- **Animações Fluidas**: Implementadas com Framer Motion
- **Responsividade Total**: Funciona perfeitamente em todos os dispositivos
- **Interações Avançadas**: Efeitos hover, transições suaves e micro-interações
- **Performance Otimizada**: Build otimizado para produção

## 🎨 Características do Design

### Paleta de Cores Moderna
- **Cherry Red**: #C41E3A (Cor primária vibrante)
- **Indigo Aura**: #4B0082 (Cor secundária elegante)
- **Dill Green**: #7CB342 (Cor de destaque)
- **Butter Yellow**: #F5E6A3 (Cor de apoio)
- **Mocha Mousse**: #A0826D (Cor neutra)

### Efeitos Visuais
- Gradientes modernos
- Sombras suaves e profundas
- Animações de entrada e saída
- Efeitos de hover interativos
- Transições fluidas entre páginas

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0**: Framework principal
- **Vite**: Build tool moderna
- **Tailwind CSS 4.1.7**: Framework CSS utilitário
- **Framer Motion**: Biblioteca de animações
- **Lucide React**: Ícones modernos
- **Axios**: Cliente HTTP para API do GitHub

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos para Instalação

1. **Clone ou extraia o projeto**
```bash
# Se usando Git
git clone <url-do-repositorio>
cd portfolio-moderno

# Ou extraia o arquivo ZIP fornecido
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
pnpm build
# ou
npm run build
```

Os arquivos de produção estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

```
portfolio-moderno/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes de UI (shadcn/ui)
│   │   ├── Header.jsx     # Cabeçalho com navegação
│   │   ├── Footer.jsx     # Rodapé moderno
│   │   ├── Layout.jsx     # Layout principal
│   │   └── ProjectCard.jsx # Card de projeto
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.jsx       # Página inicial
│   │   ├── About.jsx      # Página sobre
│   │   ├── Projects.jsx   # Página de projetos
│   │   └── Contact.jsx    # Página de contato
│   ├── lib/               # Utilitários e serviços
│   │   ├── github.js      # Integração com GitHub API
│   │   └── utils.js       # Funções utilitárias
│   ├── hooks/             # Hooks customizados
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos globais modernos
│   └── main.jsx           # Ponto de entrada
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── tailwind.config.js     # Configuração do Tailwind
```

## 🎯 Funcionalidades

### Página Inicial (Home)
- Hero section com animações
- Estatísticas dinâmicas
- Call-to-actions modernos
- Efeitos de partículas

### Página Sobre (About)
- Biografia detalhada
- Habilidades técnicas com barras de progresso animadas
- Seções de valores e princípios
- Timeline de experiência

### Página Projetos (Projects)
- Integração com GitHub API
- Sistema de busca e filtros
- Cards interativos com hover effects
- Modo de visualização grid/lista

### Página Contato (Contact)
- Formulário interativo com validação
- Informações de contato com ícones
- Links para redes sociais
- Indicador de disponibilidade

## 🎨 Customização

### Alterando Cores
Edite as variáveis CSS em `src/App.css`:

```css
:root {
  --cherry-red: #C41E3A;
  --indigo-aura: #4B0082;
  --dill-green: #7CB342;
  /* ... outras cores */
}
```

### Modificando Conteúdo
- **Informações pessoais**: Edite os componentes em `src/pages/`
- **GitHub username**: Altere em `src/lib/github.js`
- **Links sociais**: Modifique em `src/pages/Contact.jsx`

### Adicionando Animações
Use Framer Motion para criar novas animações:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Seu conteúdo aqui
</motion.div>
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure o build command: `pnpm build`
3. Configure o output directory: `dist`

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `pnpm build`
3. Configure o publish directory: `dist`

### GitHub Pages
```bash
pnpm build
# Faça upload da pasta dist/ para o GitHub Pages
```

## 🔧 Scripts Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Cria build de produção
pnpm preview      # Visualiza build de produção
pnpm lint         # Executa linting
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Suporte

Se você tiver dúvidas ou precisar de ajuda:
- Abra uma issue no repositório
- Entre em contato através do formulário no site

---

**Desenvolvido com ❤️ por Alisson Rolim**

*Portfólio moderno, responsivo e elegante para desenvolvedores*

