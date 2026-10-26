export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  presentation?: "wide" | "portrait";
}

export interface Project {
  slug: string;
  title: string;
  category: "producto" | "web" | "consultoria";
  categoryLabel: string;
  status: string;
  technologiesLabel: string;
  headline: string;
  summary: string;
  purpose: string;
  capabilities: string[];
  technologies: string[];
  visualClass: string;
  visualKicker: string;
  visualTitle: string;
  images: ProjectImage[];
  externalUrl?: string;
  externalLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "breedflow",
    title: "BreedFlow",
    category: "producto",
    categoryLabel: "Producto SaaS · Cinología",
    status: "Plataforma SaaS",
    technologiesLabel: "Angular · Django Ninja · PostgreSQL · Podman",
    headline: "Datos genéticos complejos, decisiones de cría más claras.",
    summary: "Plataforma SaaS B2B multi-inquilino para conectar federaciones, clubes, criadores y propietarios en una misma solución de gestión, con análisis genético y herramientas para planificar cruces.",
    purpose: "Unificar la gestión de organizaciones cinológicas y apoyar decisiones de cría con genealogías trazables, cálculos genéticos y datos aislados por organización.",
    capabilities: [
      "Modelo multiempresa para federaciones, clubes, criadores y propietarios, con aislamiento de datos por tenant_id.",
      "Trazabilidad recursiva de pedigríes y cálculo asíncrono del coeficiente de consanguinidad (COI) mediante la fórmula de Wright, hasta ocho generaciones configurables.",
      "Simulación de cruces virtuales (Test Mating) para explorar combinaciones antes de tomar decisiones.",
      "Arquitectura de monolito modular y procesamiento asíncrono, preparada para incorporar nuevas capacidades del dominio.",
    ],
    technologies: [
      "Backend: Python 3.13, Django 5.1 y Django Ninja.",
      "Procesamiento en segundo plano: Celery y Redis.",
      "Base de datos: PostgreSQL.",
      "Frontend: Angular 17+, Signals, Standalone Components y Angular Material.",
      "Contenedores: Podman.",
    ],
    visualClass: "breedflow-visual",
    visualKicker: "SAAS · GESTIÓN CINOLÓGICA",
    visualTitle: "BreedFlow · Plataforma cinológica",
    images: [
      {
        src: "/images/breedflow-details.webp",
        alt: "Pantalla de BreedFlow con herramientas para clubes y federaciones cinológicas",
        caption: "La plataforma contempla distintos tipos de organizaciones cinológicas.",
      },
    ],
  },
  {
    slug: "espanoldiariobot",
    title: "EspañolDiarioBot",
    category: "producto",
    categoryLabel: "Producto digital · Telegram",
    status: "En producción · @SpanishDailyBot",
    technologiesLabel: "Python · aiogram 3 · PostgreSQL",
    headline: "Práctica de español ágil, interactiva y personal.",
    summary: "Bot conversacional desarrollado bajo Expecto Lingua para practicar español cada día con ejercicios breves, interacción guiada y retroalimentación inmediata.",
    purpose: "Facilitar una práctica frecuente y accesible del idioma desde Telegram, con actividades que mantienen al usuario participando y permiten seguir su progreso.",
    capabilities: [
      "Ejercicios de gramática y vocabulario con menús y botones interactivos.",
      "Corrección y explicación instantánea de las respuestas.",
      "Estadísticas personales y selección de niveles de dificultad.",
      "Reto diario, programa de referidos y opciones premium.",
      "Flujos conversacionales gestionados mediante una máquina de estados finitos (FSM).",
      "Proyecto desarrollado y publicado como software open source.",
    ],
    technologies: [
      "Python 3.10+ y aiogram 3 con arquitectura asíncrona.",
      "Routers y Middlewares para organizar la aplicación.",
      "PostgreSQL con pooling de conexiones mediante psycopg2.",
      "FSM para gestionar el estado de las interacciones.",
    ],
    visualClass: "bot-visual",
    visualKicker: "EXPECTO LINGUA · TELEGRAM",
    visualTitle: "EspañolDiarioBot",
    images: [
      {
        src: "/images/espanoldiariobot-chat.webp",
        alt: "Conversación real con ejercicios, explicaciones y botones de EspañolDiarioBot en Telegram",
        caption: "Ejercicios, correcciones explicadas y navegación interactiva en Telegram.",
        presentation: "wide",
      },
      {
        src: "/images/espanoldiariobot-profile.webp",
        alt: "Perfil de EspañolDiarioBot en Telegram con su descripción y programa de referidos",
        caption: "Perfil público del bot y acceso al programa de referidos.",
        presentation: "portrait",
      },
    ],
    externalUrl: "https://t.me/SpanishDailyBot",
    externalLabel: "Abrir EspañolDiarioBot en Telegram",
  },
  {
    slug: "miami-torrejas",
    title: "Miami Torrejas",
    category: "web",
    categoryLabel: "Sitio web · Gastronomía",
    status: "Sitio web para negocio gastronómico",
    technologiesLabel: "Angular",
    headline: "Un sitio complejo, convertido en una experiencia one-page con cotización en tiempo real.",
    summary: "Mejora integral de la experiencia web de El Sabor de la Abuela: un diseño one-page que presenta la oferta y calcula en tiempo real cantidades y costos para pedidos de eventos.",
    purpose: "Simplificar un sitio web complejo en una experiencia directa que permita entender la oferta y obtener una estimación personalizada del pedido sin pasos innecesarios.",
    capabilities: [
      "Rediseño de un sitio web complejo a una experiencia one-page.",
      "Cotización en tiempo real de cantidades y costos según las necesidades del evento.",
      "Generación de un mensaje detallado con la cotización para enviar al WhatsApp empresarial.",
      "Presentación clara de las opciones de delivery, pick-up y catering.",
    ],
    technologies: ["Frontend: Angular."],
    visualClass: "miami-visual",
    visualKicker: "EL SABOR DE LA ABUELA",
    visualTitle: "MIAMI TORREJAS",
    images: [],
    externalUrl: "https://miamitorrejas.com",
    externalLabel: "Visitar miamitorrejas.com",
  },
  {
    slug: "tach-dream",
    title: "Kennel Tach Dream",
    category: "web",
    categoryLabel: "Sitio web · Criadero",
    status: "Sitio web y blog",
    technologiesLabel: "Angular · Django",
    headline: "Una presencia digital para una pasión familiar.",
    summary: "Sitio web y blog para un criadero familiar de English Cocker Spaniel, con información de la raza, pedigrí y canales de contacto.",
    purpose: "Presentar el trabajo y la identidad de Kennel Tach Dream en un espacio propio que conecte a la familia con personas interesadas en la raza.",
    capabilities: [
      "Presentación de la identidad visual del criadero.",
      "Contenido informativo y blog.",
      "Información de pedigrí y de English Cocker Spaniel.",
      "Canales de comunicación para familias y amantes de la raza.",
    ],
    technologies: ["Frontend: Angular.", "Backend: Django.", "Diseño responsive y presentación de contenido web."],
    visualClass: "kennel-visual",
    visualKicker: "KENNEL TACH DREAM · SITIO WEB",
    visualTitle: "English Cocker Spaniel",
    images: [
      {
        src: "/images/kennel-tach-dream-site.webp",
        alt: "Vista del sitio web de Kennel Tach Dream",
        caption: "La portada del sitio de Kennel Tach Dream.",
      },
      {
        src: "/images/kennel-tach-dream-card.webp",
        alt: "Identidad gráfica de Kennel Tach Dream sobre un fondo cálido",
        caption: "Isotipo y nombre del criadero en su composición gráfica.",
      },
    ],
    externalUrl: "https://sites.google.com/view/tachdream/inicio",
    externalLabel: "Visitar Kennel Tach Dream",
  },
  {
    slug: "rodas-xxi",
    title: "Modernización ERP Rodas XXI",
    category: "consultoria",
    categoryLabel: "Modernización · Sistemas empresariales",
    status: "Citmatel · 2019–2022",
    technologiesLabel: "Java · Spring Boot · SQL Server → PostgreSQL · Thymeleaf · BPMN",
    headline: "Modernización de un ERP con más de 20 años de historia.",
    summary: "Modernización de Rodas XXI, un ERP con más de dos décadas en producción: reingeniería del módulo de facturación, migración desde SQL Server 2000 a PostgreSQL 12 y actualización de su documentación técnica.",
    purpose: "Evolucionar un sistema empresarial crítico con documentación limitada sin comprometer la continuidad operativa: descubrir las reglas reales del negocio, separar responsabilidades funcionales y preservar la integridad de los datos.",
    capabilities: [
      "Extracción de requisitos mediante entrevistas a stakeholders, usuarios finales y desarrolladores que conocían el sistema.",
      "Descomposición del módulo monolítico de facturación en tres servicios lógicos: Ventas, Comercial y Facturación de Ventas.",
      "Migración de SQL Server 2000 a PostgreSQL 12 con preservación de la integridad transaccional.",
      "Modelado de datos, casos de uso y procesos con diagramas ER, Visual Paradigm y BPMN.",
      "Dirección de un equipo de cinco desarrolladores: planificación, asignación de tareas, revisiones de código e integración bajo Scrum/RUP.",
      "Auditoría integral de calidad Calisoft —frontend, backend, base de datos y documentación— superada con cero errores.",
    ],
    technologies: [
      "Backend: Java y Spring Boot.",
      "Base de datos de origen: Microsoft SQL Server; migración a PostgreSQL.",
      "Interfaz web: Thymeleaf.",
      "Modelado de procesos: BPMN.",
      "Descomposición funcional en servicios lógicos independientes.",
    ],
    visualClass: "erp-visual",
    visualKicker: "MODERNIZACIÓN · SISTEMAS",
    visualTitle: "ERP Rodas XXI",
    images: [],
  },
  {
    slug: "servigen",
    title: "Consultoría para Servigen",
    category: "consultoria",
    categoryLabel: "Consultoría · Estrategia técnica",
    status: "Asesoría técnica",
    technologiesLabel: "Análisis · Planificación",
    headline: "Decisiones tecnológicas con foco operativo.",
    summary: "Análisis y planificación de nuevos sistemas de gestión financiera, conectando las necesidades operativas del equipo con las decisiones de producto y arquitectura.",
    purpose: "Aclarar necesidades y prioridades antes de construir, para que el diseño de los sistemas responda a los procesos y objetivos reales de la organización.",
    capabilities: [
      "Análisis de necesidades de gestión financiera.",
      "Planificación inicial de sistemas y prioridades.",
      "Alineación entre necesidades del equipo, arquitectura y objetivos de negocio.",
    ],
    technologies: [],
    visualClass: "consulting-visual",
    visualKicker: "CONSULTORÍA · ESTRATEGIA TÉCNICA",
    visualTitle: "Sistemas de gestión financiera",
    images: [],
  },
];
