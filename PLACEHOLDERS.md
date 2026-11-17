# Placeholders — Reiki Barra Bonita

Checklist de tudo que está provisório no site e precisa ser substituído pela versão oficial.

**Última revisão:** 2026-11-17

---

## Como usar este arquivo

- Marque `[x]` quando o item estiver concluído
- Atualize a data em "Última revisão" ao finalizar alterações
- Cada item indica onde editar no código

---

## Links e contato

- [x] **Número do WhatsApp**
  - **Atual:** `5514920045160`
  - **Onde editar:** [`js/config.js`](js/config.js) → `whatsapp`
  - **Versão oficial:** `+55 14 92004-5160`

- [ ] **Mensagem pré-preenchida do WhatsApp**
  - **Atual:** `"Olá! Gostaria de agendar uma sessão de Reiki."`
  - **Onde editar:** [`js/config.js`](js/config.js) → `whatsappMessage`
  - **Versão oficial:** Texto de boas-vindas alinhado ao tom do estúdio


- [x] **Localização (Google Maps)**
  - **Atual:** `Rua Claudio Lopes, 205 - Jardim Vista Alegre, Barra Bonita / SP`
  - **Onde editar:** [`js/config.js`](js/config.js) → `links.maps`
  - **Versão oficial:** Endereço informado pelo estúdio

---

## Conteúdo

- [ ] **FAQ — perguntas e respostas**
  - **Atual:** 5 perguntas genéricas sobre Reiki
  - **Onde editar:** [`js/config.js`](js/config.js) → array `faq`
  - **Versão oficial:** Conteúdo escrito pelo estúdio, com informações reais (valores, política de cancelamento, etc.)

- [ ] **Duração da sessão (rodapé)**
  - **Atual:** `"Sessões de aproximadamente 30 minutos"` (estimativa)
  - **Onde editar:** [`js/config.js`](js/config.js) → `sessionDuration`
  - **Versão oficial:** Duração real confirmada

- [ ] **Horários de atendimento (rodapé)**
  - **Atual:** `"Segunda a Sábado"` (do brief, sem horários exatos)
  - **Onde editar:** [`index.html`](index.html) → seção `.footer`
  - **Versão oficial:** Dias e horários exatos (ex.: "Seg a Sex 9h–18h, Sáb 9h–13h")

- [ ] **Meta description (SEO)**
  - **Atual:** Texto genérico em [`index.html`](index.html)
  - **Onde editar:** [`index.html`](index.html) → `<meta name="description">` e `og:description`
  - **Versão oficial:** Copy oficial para busca e compartilhamento

---

## Visual

- [ ] **Foto de perfil**
  - **Atual:** Logo institucional (`assets/logo-reiki-dark.png`)
  - **Onde editar:** [`index.html`](index.html) → `.profile-photo` e [`assets/`](assets/)
  - **Versão oficial:** Avaliar se mantém o logo ou troca por foto do espaço/praticante

- [ ] **Open Graph image**
  - **Atual:** Mesmo logo usado como og:image
  - **Onde editar:** [`index.html`](index.html) → `og:image`
  - **Versão oficial:** Imagem otimizada para compartilhamento (1200×630px recomendado)

---

## Resumo rápido

| Total de itens | Concluídos | Pendentes |
|----------------|------------|-----------|
| 11             | 2          | 9         |

Quando todos os itens estiverem marcados, o site estará com conteúdo oficial completo.
