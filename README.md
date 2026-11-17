# Reiki Barra Bonita — Link-in-Bio

Página única estilo Linktree para centralizar links de serviços e redes sociais do estúdio Reiki Barra Bonita.

## Visualizar localmente

Abra o arquivo `index.html` no navegador, ou use um servidor local:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Acesse `http://localhost:8080`.

## Editar links

Todos os links e textos configuráveis estão em [`js/config.js`](js/config.js):

```javascript
const SITE_CONFIG = {
  whatsapp: "5514920045160",       // WhatsApp oficial
  whatsappMessage: "...",
  instagram: "https://instagram.com/reikibarrabonita",
  links: {
    experiencia: "#",                // ← URL da experiência Reiki
    sobre: "#",                      // ← URL sobre o estúdio
    maps: "https://maps.google.com/?q=Barra+Bonita,SP",
  },
  sessionDuration: "Sessões de aproximadamente 30 minutos",
  faq: [ /* perguntas e respostas */ ],
};
```

Após editar, salve e recarregue a página.

## Placeholders pendentes

Consulte [`PLACEHOLDERS.md`](PLACEHOLDERS.md) para a lista completa do que ainda precisa de versão oficial.

## Deploy

O site é estático — basta publicar a pasta inteira.

### Netlify Drop (mais rápido)

1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto
3. Pronto — URL gerada automaticamente

### Vercel

```bash
npx vercel
```

### GitHub Pages

1. Crie um repositório e faça push dos arquivos
2. Em Settings → Pages, selecione a branch `main` e pasta `/ (root)`
3. Acesse `https://seu-usuario.github.io/nome-do-repo`

## Estrutura

```
link-reiki/
├── index.html          # Página principal
├── css/styles.css      # Estilos (paleta institucional)
├── js/config.js        # Links e conteúdo editável
├── assets/             # Logo e imagens
├── PLACEHOLDERS.md     # Checklist de pendências
└── README.md           # Este arquivo
```

## Paleta de cores

| Uso | Cor |
|-----|-----|
| Fundo | `#F8F5EE` |
| Botões / texto principal | `#123B32` |
| Destaques / moldura | `#C8A96A` |
| Subtítulo | `#6F8F63` |

## Tipografia

Cormorant Garamond (Google Fonts) — carregada automaticamente via CDN.
