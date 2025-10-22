import bgImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import logo from "../assets/imgs/logo/logo.webp";
import imagemAbout from "../assets/imgs/about/aboutImg.webp";
import { infos } from "./content";
import { Shield } from "lucide-react";
import { File } from "lucide-react";
import { Banknote } from "lucide-react";
import { FileKey2 } from "lucide-react";
import { Scale } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Accessibility } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Ban } from "lucide-react";
import { IdCard } from "lucide-react";
import { Gavel } from "lucide-react";
import TypewriterComponent from "typewriter-effect";

// import img1 from "../assets/imgs/about/image1.webp";
// import img2 from "../assets/imgs/about/image2.webp";
// import img3 from "../assets/imgs/about/image3.webp";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Ferreira Alves Advocacia | Direito de Família Internacional em Guarulhos - SP",
    description:
      "Escritório especializado em Direito de Família Internacional em Guarulhos - SP, atuando em guarda, pensão e reconhecimento de decisões estrangeiras.",
    keywords:
      "Direito de Família Internacional, Advogado de Família em Guarulhos, Ferreira Alves Advocacia, Pensão Alimentícia Internacional, Guarda Internacional, Divórcio Internacional, Reconhecimento de Sentença Estrangeira, Direitos da Criança no Exterior, Execução de Pensão entre Países, Responsabilidade Parental Internacional, Advocacia em Direito de Família, Consultoria Jurídica Internacional, Acordos de Família entre Países, Custódia Internacional, Direitos do Ex-Cônjuge no Exterior, Suporte Jurídico Internacional, Mediação Familiar Internacional, Tratados Internacionais de Família, Proteção dos Filhos no Exterior, Assessoria Jurídica Guarulhos.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          <TypewriterComponent
            options={{
              strings: ["A_Definir", "A_Definir", "A_Definir"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      ),
      subtitle: "A_Definir",
      buttonLabel: "A_Definir",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  steps: {
    miniTag: "PASSO A PASSO",
    title: "Como funciona nosso serviço?",
    subtitle: "",
    alt: "Passo a passo do funcionamento do serviço",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "Contato Inicial",
        cardDescription:
          "Você entra em contato conosco através de WhatsApp ou ligação.",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "Pré-análise",
        cardDescription:
          "Nossa equipe realiza uma pré-análise para identificar se há uma dívida compatível com nossos serviços.",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "Análise Gratuita",
        cardDescription:
          "Após confirmar a possibilidade de negociação, agendamos uma análise totalmente gratuita com um de nossos especialistas.",
      },
      card4: {
        stepNumber: 4,
        cardTitle: "Reunião Presencial ou Vídeo Chamada",
        cardDescription:
          "Você comparece e recebe todas as informações sobre a dívida, a possibilidade de redução e o contrato conosco, além de uma via do contrato. Será informado sobre a possibilidade de busca e apreensão e restrição no nome em casos de inadimplência.",
      },
      card5: {
        stepNumber: 5,
        cardTitle: "Início das Negociações",
        cardDescription:
          "Nossa equipe inicia as negociações para obter o melhor acordo para a quitação da sua dívida.",
      },
      card6: {
        stepNumber: 6,
        cardTitle: "Quitação e Sucesso",
        cardDescription:
          "Quando o acordo é alcançado, você realiza a quitação por um preço justo, junto à instituição financeira e se torna um caso de sucesso.",
      },
      buttonLabel: "Saiba mais",
      ariaLabel: "Passo a passo do serviço",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-warning-icon lucide-file-warning"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        ),
        title: "A_Definir",
        description: "A_Definir",
        label: "A_Definir",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-car-icon lucide-car"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        ),
        title: "A_Definir",
        description: "A_Definir",
        label: "A_Definir",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ban-icon lucide-ban"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>
        ),
        title: "A_Definir",
        description: "A_Definir",
        label: "A_Definir",
      },
    },
  },
  news: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: (
        <p className="opacity-80">
          A_Definir
          <br />
          <br />
        </p>
      ),
    },
    text: <p> A_Definir</p>,
    buttonLabel: "Baixar arquivo PDF",
    ctaButtonAriaLabel: "Botão de Contato",
    linkPdf:
      "https://drive.google.com/file/d/1rJWee_zeiV181Kf5syFQGM2UTxbA1gM8/view?usp=sharing",
  },
  about: {
    bgImg: bgImg,
    imagesGaleria: {
      // imagem1: img1,
      // imagem2: img2,
      // imagem3: img3,
    },
    imgAbout: {
      img: imagemAbout,
    },
    logo: {
      logoImg: logo,
      alt: "logomarca",
    },
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
    },
    paragraph: (
      <p>
        A_Definir
        <br />
        <br />
        A_Definir
      </p>
    ),
    modalAbout: (
      <p>
        A_Definir
        <br />
        <br />
        A_Definir
        <br />
        <br />
        A_Definir
        <br />
      </p>
    ),
    buttonLabel: "A_Definir",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-car-icon lucide-car"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        ),
        title: " A_Definir",
        description: (
          <p>
            A_Definir
            <br /> <br />
            A_Definir
            <br />
            <br />
            A_Definir
            <br />
          </p>
        ),
        label: "Entre em contato",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        title: "A_Definir",
        description: (
          <p>
            A_Definir
            <br />
            <br />
            A_Definir
            <br />
            <br />
            A_Definir
            <br />
          </p>
        ),
        label: "A_Definir",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield-check-icon lucide-shield-check"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ),
        title: "A_Definir",
        description: "A_Definir",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock-icon lucide-clock"
          >
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        ),
        title: "A_Definir",
        description: (
          <p>
            A_Definir
            <br />
            <br />
            A_Definir
          </p>
        ),
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: <p className="opacity-80">A_Definir</p>,
    },
    buttonLabel: "A_Definir",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="black"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
    card4: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone-icon lucide-phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
      ),
      title: "Fixo",
      description: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
