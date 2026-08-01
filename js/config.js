const SITE_CONFIG = {
  whatsapp: "55XXXXXXXXXXX",
  whatsappMessage: "Olá! Gostaria de agendar uma sessão de Reiki.",
  instagram: "https://instagram.com/reikibarrabonita",
  links: {
    experiencia: "#",
    sobre: "#",
    maps: "https://maps.google.com/?q=Barra+Bonita,SP",
  },
  sessionDuration: "Sessões de aproximadamente 60 minutos",
  faq: [
    {
      question: "O que é Reiki?",
      answer:
        "Reiki é uma técnica japonesa de harmonização energética que promove relaxamento profundo, equilíbrio e bem-estar. O praticante canaliza energia universal através das mãos, auxiliando o corpo a encontrar seu estado natural de cura.",
    },
    {
      question: "Como funciona uma sessão?",
      answer:
        "Você permanece confortavelmente deitado(a) enquanto recebe a imposição de mãos em pontos específicos do corpo. A sessão é silenciosa, acolhedora e respeita seu ritmo. Não é necessário remover roupas — apenas sapatos e acessórios metálicos.",
    },
    {
      question: "Preciso me preparar de alguma forma?",
      answer:
        "Recomendamos chegar alguns minutos antes, evitar refeições pesadas e, se possível, vir com roupas confortáveis. O mais importante é vir com a intenção de cuidar de si.",
    },
    {
      question: "Quantas sessões são recomendadas?",
      answer:
        "Cada pessoa é única. Algumas sentem benefícios já na primeira sessão; outras preferem acompanhamento regular. Durante o atendimento, conversamos sobre o que faz sentido para você.",
    },
    {
      question: "Como agendar?",
      answer:
        "Clique no botão \"Agendar uma Sessão\" no topo desta página para falar conosco pelo WhatsApp. Atendemos de segunda a sábado, com hora marcada.",
    },
  ],
};

function buildWhatsAppUrl() {
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;
}

function applyConfig() {
  const whatsappLink = document.querySelector('[data-link="whatsapp"]');
  if (whatsappLink) {
    whatsappLink.href = buildWhatsAppUrl();
  }

  const linkMap = {
    experiencia: SITE_CONFIG.links.experiencia,
    sobre: SITE_CONFIG.links.sobre,
    instagram: SITE_CONFIG.instagram,
    maps: SITE_CONFIG.links.maps,
  };

  Object.entries(linkMap).forEach(([key, url]) => {
    const el = document.querySelector(`[data-link="${key}"]`);
    if (el) el.href = url;
  });

  const sessionDuration = document.querySelector("[data-session-duration]");
  if (sessionDuration) {
    sessionDuration.textContent = SITE_CONFIG.sessionDuration;
  }

  const faqContainer = document.querySelector("[data-faq-container]");
  if (faqContainer && SITE_CONFIG.faq.length) {
    faqContainer.innerHTML = SITE_CONFIG.faq
      .map(
        (item) => `
      <details class="faq-item">
        <summary class="faq-question">${item.question}</summary>
        <p class="faq-answer">${item.answer}</p>
      </details>
    `
      )
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", applyConfig);
