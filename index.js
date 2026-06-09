const supportedLanguages = ['es', 'en'];
let currentLanguage = localStorage.getItem('portfolioLanguage') || 'es';
if (!supportedLanguages.includes(currentLanguage)) currentLanguage = 'es';

const translations = {
  es: {
    meta: {
      title: 'Elías Martínez | Backend Engineer',
      description: 'Backend Engineer especializado en sistemas transaccionales, APIs robustas, fintech integrations y plataformas SaaS en producción.'
    },
    nav: {
      about: 'Sobre mí',
      focus: 'Enfoque',
      skills: 'Stack',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Disponible para proyectos backend',
      title: 'Backend Engineer | Transactional Systems, Fintech & SaaS',
      subtitle: 'Construyo sistemas backend críticos para operaciones financieras, firmas electrónicas, validación de identidad y plataformas SaaS en producción.',
      description: 'Diseño arquitecturas donde la consistencia de datos, la trazabilidad, la seguridad y el rendimiento no son detalles secundarios: son el centro del sistema. Me enfoco en APIs robustas, lógica de negocio compleja, integraciones externas y flujos transaccionales confiables.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Contactar',
      stats: {
        experience: 'años construyendo software',
        production: 'sistemas en producción',
        integrations: 'integraciones/API workflows'
      }
    },
    current: {
      label: 'Actualmente',
      title: 'Diseñando backend para SaaS, fintech y operaciones críticas',
      subtitle: 'Trabajo principalmente con Python, Django/DRF, Flask, PostgreSQL/MySQL, Redis, JWT, integraciones de terceros e infraestructura Linux para llevar sistemas reales a producción.'
    },
    about: {
      label: 'Sobre mí',
      title: 'Ingeniero Backend con enfoque en sistemas de producción',
      p1: 'Soy backend engineer especializado en el diseño de sistemas transaccionales, plataformas SaaS y flujos financieros donde la consistencia, la seguridad y la trazabilidad son críticas.',
      p2: 'He construido arquitecturas capaces de soportar operaciones concurrentes, procesamiento en tiempo real, integraciones con proveedores externos, validación de identidad, firma electrónica y lógica de negocio compleja.',
      p3: 'Mi enfoque no es sólo escribir endpoints: construyo el núcleo que permite que productos reales funcionen correctamente en producción, con decisiones orientadas a mantenibilidad, rendimiento y evolución a largo plazo.',
      cards: {
        integrity: {
          title: 'Integridad Transaccional',
          text: 'Operaciones críticas con idempotencia, validaciones de dominio y manejo seguro de estados.'
        },
        performance: {
          title: 'Rendimiento en Alto Volumen',
          text: 'Optimización de consultas, índices, caching y control de concurrencia para cargas reales.'
        },
        audit: {
          title: 'Trazabilidad y Auditoría',
          text: 'Registro completo de operaciones, historial de cambios, callbacks y seguimiento de estados.'
        },
        saas: {
          title: 'Arquitectura SaaS Multi-tenant',
          text: 'Aislamiento por cliente, control operativo y diseño escalable para múltiples entornos.'
        }
      }
    },
    focus: {
      label: 'Engineering Focus',
      title: 'Áreas donde aporto más valor',
      subtitle: 'Más que una lista de tecnologías, este es el tipo de problemas que diseño, estabilizo y llevo a producción.',
      items: {
        transactional: {
          title: 'Sistemas transaccionales',
          text: 'Ventas, pagos, movimientos de caja, conciliación, control de estados e idempotencia.'
        },
        fintech: {
          title: 'Flujos financieros y crédito',
          text: 'Simulaciones, solicitudes, reglas de negocio, datos sensibles y validaciones críticas.'
        },
        identity: {
          title: 'Identidad y firma digital',
          text: 'Onboarding, validación biométrica, firma electrónica, callbacks y proveedores externos.'
        },
        integration: {
          title: 'Integración de sistemas',
          text: 'APIs externas, ERP, proveedores financieros, pasarelas de pago y servicios desacoplados.'
        }
      }
    },
    skills: {
      label: 'Stack Técnico',
      title: 'Tecnologías y prácticas en producción',
      subtitle: 'Stack orientado a construir sistemas backend transaccionales, APIs robustas y plataformas SaaS con alto volumen de operaciones.',
      backend: { title: 'Backend & APIs' },
      db: { title: 'Bases de Datos' },
      infra: { title: 'Infraestructura & DevOps' },
      arch: { title: 'Arquitectura & Sistemas' }
    },
    projects: {
      label: 'Proyectos',
      title: 'Sistemas construidos para producción',
      subtitle: 'Cada proyecto representa problemas reales resueltos mediante sistemas robustos, arquitectura escalable y decisiones técnicas orientadas a producción.',
      filters: {
        all: 'Todos',
        professional: 'Profesional',
        personal: 'Personal'
      },
      role: 'Rol',
      detail: 'Ver detalle',
      sections: {
        summary: 'Resumen',
        architecture: 'Arquitectura',
        challenges: 'Retos Técnicos',
        technologies: 'Tecnologías',
        results: 'Resultados'
      }
    },
    clients: {
      label: 'Clientes',
      title: 'Empresas y proyectos con los que he trabajado',
      subtitle: 'Experiencia colaborando en desarrollo backend, plataformas SaaS, sistemas financieros, logística interna e infraestructura de producción.',
      poder: 'Desarrollo completo de plataforma SaaS para gestión jurídica, incluyendo backend, arquitectura, pagos y despliegue.',
      myasesor: 'Desarrollo backend y migración de sistema legacy hacia arquitectura moderna basada en servicios.',
      igd: 'Desarrollo backend para plataformas fintech, lógica de negocio, validación de identidad y flujos de firma.',
      catalonia: 'Soporte e infraestructura IT en entorno empresarial, incluyendo redes, sistemas y gestión de usuarios.',
      gases: 'Desarrollo end-to-end de plataforma interna para trazabilidad logística de cilindros mediante QR e integración con ERP.'
    },
    experience: {
      label: 'Experiencia',
      title: 'Trayectoria profesional',
      poder: {
        role: 'Backend Engineer / Lead Developer',
        date: 'Ago 2024 - Presente',
        text: 'Desarrollo completo de plataforma SaaS para gestión jurídica, diseño de arquitectura, APIs REST, pagos, búsqueda de profesionales, autenticación y despliegue en producción.'
      },
      catalonia: {
        role: 'IT Systems Analyst',
        date: 'Abr 2025 - Jul 2025',
        text: 'Soporte técnico e infraestructura en entorno hotelero empresarial: redes, usuarios, Active Directory, incidencias de sistemas críticos y soporte operativo.'
      },
      igd: {
        role: 'Backend Developer',
        date: 'Nov 2023 - Abr 2024',
        text: 'Desarrollo backend para plataformas fintech, simulación de créditos, firma electrónica, validación de identidad, endpoints API y lógica de negocio sobre datos sensibles.'
      },
      myasesor: {
        role: 'Backend Engineer',
        date: 'Feb 2021 - Nov 2021',
        text: 'Desarrollo del sistema principal, migración de código legacy desde Java/Spring Boot hacia Python/Django, arquitectura modular basada en servicios y APIs internas.'
      }
    },
    contact: {
      label: 'Contacto',
      title: 'Trabajemos juntos',
      heading: 'Disponible para nuevos proyectos',
      text: 'Si necesitas construir o escalar un sistema backend crítico — SaaS, fintech, firma digital, validación de identidad, logística o plataforma transaccional — puedo ayudarte a diseñarlo y llevarlo a producción.',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar mensaje'
      },
      alerts: {
        success: 'Mensaje enviado correctamente',
        error: 'Error al enviar el mensaje'
      }
    },
    footer: {
      text: '© 2026 Elías Martínez — Sistemas reales: consistencia, rendimiento y escalabilidad.'
    }
  },
  en: {
    meta: {
      title: 'Elías Martínez | Backend Engineer',
      description: 'Backend Engineer specialized in transactional systems, robust APIs, fintech integrations and production SaaS platforms.'
    },
    nav: {
      about: 'About',
      focus: 'Focus',
      skills: 'Stack',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      badge: 'Available for backend projects',
      title: 'Backend Engineer | Transactional Systems, Fintech & SaaS',
      subtitle: 'I build critical backend systems for financial operations, electronic signatures, identity validation and production SaaS platforms.',
      description: 'I design architectures where data consistency, traceability, security and performance are not secondary details: they are the core of the system. My work focuses on robust APIs, complex business logic, external integrations and reliable transactional workflows.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
      stats: {
        experience: 'years building software',
        production: 'production systems',
        integrations: 'integrations/API workflows'
      }
    },
    current: {
      label: 'Currently',
      title: 'Designing backend systems for SaaS, fintech and critical operations',
      subtitle: 'I mainly work with Python, Django/DRF, Flask, PostgreSQL/MySQL, Redis, JWT, third-party integrations and Linux infrastructure to bring real systems into production.'
    },
    about: {
      label: 'About me',
      title: 'Backend Engineer focused on production systems',
      p1: 'I am a backend engineer specialized in transactional systems, SaaS platforms and financial workflows where consistency, security and traceability are critical.',
      p2: 'I have built architectures capable of handling concurrent operations, real-time processing, third-party integrations, identity validation, electronic signatures and complex business logic.',
      p3: 'My focus is not only writing endpoints: I build the core that allows real products to run correctly in production, with decisions oriented toward maintainability, performance and long-term evolution.',
      cards: {
        integrity: {
          title: 'Transactional Integrity',
          text: 'Critical operations with idempotency, domain validations and safe state management.'
        },
        performance: {
          title: 'High-Volume Performance',
          text: 'Query optimization, indexes, caching and concurrency control for real workloads.'
        },
        audit: {
          title: 'Traceability & Audit',
          text: 'Complete operation logs, change history, callbacks and state tracking.'
        },
        saas: {
          title: 'Multi-tenant SaaS Architecture',
          text: 'Customer isolation, operational control and scalable design for multiple environments.'
        }
      }
    },
    focus: {
      label: 'Engineering Focus',
      title: 'Where I deliver the most value',
      subtitle: 'More than a list of technologies, these are the types of problems I design, stabilize and bring to production.',
      items: {
        transactional: {
          title: 'Transactional systems',
          text: 'Sales, payments, cash movements, reconciliation, state control and idempotency.'
        },
        fintech: {
          title: 'Financial and credit workflows',
          text: 'Simulations, applications, business rules, sensitive data and critical validations.'
        },
        identity: {
          title: 'Identity and digital signature',
          text: 'Onboarding, biometric validation, electronic signature, callbacks and third-party providers.'
        },
        integration: {
          title: 'System integration',
          text: 'External APIs, ERP, financial providers, payment gateways and decoupled services.'
        }
      }
    },
    skills: {
      label: 'Technical Stack',
      title: 'Technologies and practices used in production',
      subtitle: 'A stack focused on building transactional backend systems, robust APIs and high-volume SaaS platforms.',
      backend: { title: 'Backend & APIs' },
      db: { title: 'Databases' },
      infra: { title: 'Infrastructure & DevOps' },
      arch: { title: 'Architecture & Systems' }
    },
    projects: {
      label: 'Projects',
      title: 'Systems built for production',
      subtitle: 'Each project represents real problems solved through robust systems, scalable architecture and production-oriented technical decisions.',
      filters: {
        all: 'All',
        professional: 'Professional',
        personal: 'Personal'
      },
      role: 'Role',
      detail: 'View details',
      sections: {
        summary: 'Summary',
        architecture: 'Architecture',
        challenges: 'Technical Challenges',
        technologies: 'Technologies',
        results: 'Results'
      }
    },
    clients: {
      label: 'Clients',
      title: 'Companies and projects I have worked with',
      subtitle: 'Experience collaborating in backend development, SaaS platforms, financial systems, internal logistics and production infrastructure.',
      poder: 'Full development of a legal SaaS platform, including backend, architecture, payments and deployment.',
      myasesor: 'Backend development and migration from a legacy system to a modern service-based architecture.',
      igd: 'Backend development for fintech platforms, business logic, identity validation and signature workflows.',
      catalonia: 'IT support and infrastructure in an enterprise environment, including networks, systems and user management.',
      gases: 'End-to-end development of an internal QR-based cylinder logistics tracking platform integrated with ERP.'
    },
    experience: {
      label: 'Experience',
      title: 'Professional background',
      poder: {
        role: 'Backend Engineer / Lead Developer',
        date: 'Aug 2024 - Present',
        text: 'Full development of a legal SaaS platform, architecture design, REST APIs, payments, professional search, authentication and production deployment.'
      },
      catalonia: {
        role: 'IT Systems Analyst',
        date: 'Apr 2025 - Jul 2025',
        text: 'Technical support and infrastructure in an enterprise hotel environment: networks, users, Active Directory, critical system incidents and operational support.'
      },
      igd: {
        role: 'Backend Developer',
        date: 'Nov 2023 - Apr 2024',
        text: 'Backend development for fintech platforms, credit simulations, electronic signature, identity validation, API endpoints and business logic for sensitive data.'
      },
      myasesor: {
        role: 'Backend Engineer',
        date: 'Feb 2021 - Nov 2021',
        text: 'Development of the main system, migration from legacy Java/Spring Boot code to Python/Django, modular service-based architecture and internal APIs.'
      }
    },
    contact: {
      label: 'Contact',
      title: 'Let’s work together',
      heading: 'Available for new projects',
      text: 'If you need to build or scale a critical backend system — SaaS, fintech, digital signature, identity validation, logistics or transactional platform — I can help you design it and bring it to production.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send message'
      },
      alerts: {
        success: 'Message sent successfully',
        error: 'Error sending message'
      }
    },
    footer: {
      text: '© 2026 Elías Martínez — Real systems: consistency, performance and scalability.'
    }
  }
};

const projectsData = [
  {
    id: 'signature_identity',
    type: 'professional',
    technologies: ['Flask', 'MySQL', 'JWT', 'Alembic', 'REST APIs', 'Third-party Integrations'],
    es: {
      title: 'Digital Signature & Identity Validation Platform',
      subtitle: 'Proyecto Profesional | Backend Developer',
      problem: 'Plataforma para firma electrónica y validación de identidad integrada con proveedores externos, diseñada para habilitar onboarding, validación biométrica, firma documental y seguimiento de estados dentro de flujos de crédito.',
      role: 'Backend Developer',
      summary: 'Sistema backend para gestionar procesos de validación de identidad y firma electrónica en solicitudes de crédito. Incluye creación de transacciones, control de participantes, callbacks, refresh de estados, seguridad mediante JWT y reglas para reutilizar validaciones exitosas vigentes.',
      architecture: [
        'Endpoints separados para operadores, deudores y codeudores según nivel de acceso',
        'Integración con proveedores externos de identidad y firma electrónica',
        'Persistencia de transacciones, firmantes, callbacks y estados globales del proceso',
        'Validación con JWT para flujos privados y búsqueda segura para flujos públicos',
        'Migraciones con Alembic y modelado relacional en MySQL'
      ],
      challenges: [
        'Manejar estados distribuidos entre el sistema interno y proveedores externos',
        'Diseñar flujos seguros para usuarios autenticados y participantes externos',
        'Evitar duplicidad de transacciones reutilizando validaciones exitosas vigentes',
        'Procesar callbacks y refrescar estados sin romper la trazabilidad',
        'Mantener mensajes genéricos y rate limits para reducir exposición de datos sensibles'
      ],
      results: [
        { value: '100%', label: 'Trazabilidad del proceso' },
        { value: 'JWT', label: 'Seguridad en flujos privados' },
        { value: '90 días', label: 'Reuso de validaciones vigentes' }
      ]
    },
    en: {
      title: 'Digital Signature & Identity Validation Platform',
      subtitle: 'Professional Project | Backend Developer',
      problem: 'Platform for electronic signature and identity validation integrated with external providers, designed to enable onboarding, biometric validation, document signing and state tracking within credit workflows.',
      role: 'Backend Developer',
      summary: 'Backend system to manage identity validation and electronic signature processes for credit applications. It includes transaction creation, participant control, callbacks, state refresh, JWT-based security and rules to reuse successful active validations.',
      architecture: [
        'Separate endpoints for operators, debtors and co-debtors depending on access level',
        'Integration with external identity and electronic signature providers',
        'Persistence of transactions, signers, callbacks and global process states',
        'JWT validation for private flows and secure lookup for public flows',
        'Alembic migrations and relational modeling in MySQL'
      ],
      challenges: [
        'Managing distributed states between the internal system and external providers',
        'Designing secure flows for authenticated users and external participants',
        'Avoiding duplicated transactions by reusing successful active validations',
        'Processing callbacks and refreshing states without breaking traceability',
        'Keeping generic messages and rate limits to reduce exposure of sensitive data'
      ],
      results: [
        { value: '100%', label: 'Process traceability' },
        { value: 'JWT', label: 'Private flow security' },
        { value: '90 days', label: 'Active validation reuse' }
      ]
    }
  },
  {
    id: 'lottery',
    type: 'personal',
    technologies: ['Django', 'PostgreSQL', 'Redis', 'Idempotency', 'Concurrency Control', 'SaaS'],
    es: {
      title: 'Transactional SaaS Platform for Lottery Operations with Risk Engine',
      subtitle: 'Proyecto Personal | Backend Engineer',
      problem: 'Plataforma SaaS multi-tenant para gestión de bancas de lotería, diseñada para manejar ventas, pagos, caja, turnos y un motor de riesgo que valida exposición financiera antes de cada operación.',
      role: 'Backend Engineer (Core System Design)',
      summary: 'Plataforma SaaS multi-tenant desarrollada para la operación de bancas de lotería en República Dominicana, enfocada en procesamiento transaccional de alto volumen, control financiero y gestión de riesgo en tiempo real.',
      architecture: [
        'Arquitectura multi-tenant con aislamiento por consorcio y sucursal',
        'Sistema transaccional para ventas, pagos y movimientos de caja',
        'Motor de riesgo en tiempo real con cálculo incremental de exposición',
        'API REST con Django REST Framework y validaciones a nivel de dominio',
        'Modelo de caja continua con periodos contables y conciliación automática',
        'Uso de Redis para caching y control de operaciones concurrentes'
      ],
      challenges: [
        'Manejo de concurrencia en ventas simultáneas evitando duplicados e inconsistencias',
        'Implementación de idempotencia en creación de tickets y pagos',
        'Cálculo del peor escenario financiero en tiempo real',
        'Diseño de un sistema de caja con conciliación obligatoria y trazabilidad completa',
        'Procesamiento de alto volumen sin degradar el rendimiento del sistema'
      ],
      results: [
        { value: '300–800', label: 'Tickets/min por servidor' },
        { value: '100%', label: 'Trazabilidad de operaciones' },
        { value: '0', label: 'Duplicados en operaciones críticas' }
      ]
    },
    en: {
      title: 'Transactional SaaS Platform for Lottery Operations with Risk Engine',
      subtitle: 'Personal Project | Backend Engineer',
      problem: 'Multi-tenant SaaS platform for lottery shop operations, designed to handle sales, payments, cash control, cashier shifts and a risk engine that validates financial exposure before each operation.',
      role: 'Backend Engineer (Core System Design)',
      summary: 'Multi-tenant SaaS platform developed for lottery operations in the Dominican Republic, focused on high-volume transactional processing, financial control and real-time risk management.',
      architecture: [
        'Multi-tenant architecture with isolation by consortium and branch',
        'Transactional system for sales, payments and cash movements',
        'Real-time risk engine with incremental exposure calculation',
        'REST API built with Django REST Framework and domain-level validations',
        'Continuous cash model with accounting periods and automatic reconciliation',
        'Redis usage for caching and concurrent operation control'
      ],
      challenges: [
        'Handling concurrency in simultaneous sales while avoiding duplicates and inconsistencies',
        'Implementing idempotency for ticket and payment creation',
        'Calculating the worst-case financial scenario in real time',
        'Designing a cash control system with mandatory reconciliation and full traceability',
        'Processing high volume without degrading system performance'
      ],
      results: [
        { value: '300–800', label: 'Tickets/min per server' },
        { value: '100%', label: 'Operation traceability' },
        { value: '0', label: 'Duplicates in critical operations' }
      ]
    }
  },
  {
    id: 'smartcredit',
    type: 'professional',
    technologies: ['Python', 'Django', 'MySQL', 'REST APIs', 'Business Logic', 'Fintech'],
    es: {
      title: 'Credit Management Platform for Simulations and Loan Control',
      subtitle: 'Proyecto Profesional | Backend Developer',
      problem: 'Plataforma backend para gestión de créditos y simulaciones financieras, diseñada para centralizar información, procesar solicitudes de préstamo y ejecutar cálculos financieros de forma segura y consistente.',
      role: 'Backend Developer',
      summary: 'Plataforma orientada a la gestión de créditos y simulaciones financieras, diseñada para facilitar análisis, cálculo y control de préstamos dentro de un entorno productivo.',
      architecture: [
        'Backend orientado a lógica de negocio para gestión de créditos y simulaciones financieras',
        'APIs para consulta, registro y procesamiento de información asociada a préstamos',
        'Modelo de datos relacional para control de usuarios, solicitudes y operaciones financieras',
        'Estructura modular para facilitar mantenimiento y evolución del sistema',
        'Validaciones de negocio para garantizar consistencia en cálculos y flujos de crédito'
      ],
      challenges: [
        'Implementar lógica de negocio para simulaciones financieras de forma consistente',
        'Diseñar endpoints backend para operaciones relacionadas con créditos y préstamos',
        'Manejar datos financieros y validaciones críticas de forma segura',
        'Mejorar funcionalidades existentes sin afectar la estabilidad',
        'Construir una base backend clara y mantenible para evolución futura'
      ],
      results: [
        { value: 'Crédito', label: 'Gestión centralizada' },
        { value: 'Simulación', label: 'Herramientas financieras' },
        { value: 'Seguro', label: 'Procesamiento confiable' }
      ]
    },
    en: {
      title: 'Credit Management Platform for Simulations and Loan Control',
      subtitle: 'Professional Project | Backend Developer',
      problem: 'Backend platform for credit management and financial simulations, designed to centralize information, process loan requests and run financial calculations safely and consistently.',
      role: 'Backend Developer',
      summary: 'Platform focused on credit management and financial simulations, built to support analysis, calculation and loan control in a production environment.',
      architecture: [
        'Business-logic backend for credit management and financial simulations',
        'APIs for querying, registering and processing loan-related information',
        'Relational data model for users, requests and financial operations',
        'Modular structure to support maintenance and future evolution',
        'Business validations to ensure consistency in credit calculations and flows'
      ],
      challenges: [
        'Implementing consistent business logic for financial simulations',
        'Designing backend endpoints for credit and loan operations',
        'Handling financial data and critical validations securely',
        'Improving existing features without affecting system stability',
        'Building a clear and maintainable backend foundation for future product evolution'
      ],
      results: [
        { value: 'Credit', label: 'Centralized management' },
        { value: 'Simulation', label: 'Financial tools' },
        { value: 'Secure', label: 'Reliable processing' }
      ]
    }
  },
  {
    id: 'qrcylinder',
    type: 'professional',
    technologies: ['Python', 'Django', 'DRF', 'MySQL', 'JavaScript', 'QR Scanner'],
    es: {
      title: 'QR-Based Cylinder Tracking Platform for Internal Logistics Control',
      subtitle: 'Proyecto Profesional | Full-Stack Developer',
      problem: 'Sistema end-to-end para trazabilidad de cilindros de gas mediante QR, permitiendo controlar el flujo operativo desde la recogida hasta la devolución final, integrado con el ERP de la empresa.',
      role: 'Full-Stack Developer',
      summary: 'Aplicación interna desarrollada de extremo a extremo para la gestión y trazabilidad de cilindros de gas mediante códigos QR en Gases de la Costa S. A.',
      architecture: [
        'Diseño e implementación completa del sistema backend, frontend y flujo operativo',
        'Backend con lógica de negocio para control de estados y trazabilidad de cilindros',
        'APIs REST para registro de movimientos y sincronización con ERP',
        'Frontend web optimizado para uso en campo con escaneo QR mediante cámara',
        'Modelo relacional para representar el ciclo completo de vida del cilindro',
        'Despliegue y configuración del sistema en entorno productivo'
      ],
      challenges: [
        'Diseñar desde cero un sistema alineado con el flujo logístico real',
        'Implementar trazabilidad completa a través de múltiples etapas operativas',
        'Integrar el sistema con el ERP sin afectar la operación existente',
        'Optimizar la experiencia de usuario para dispositivos móviles en campo',
        'Garantizar consistencia de datos con múltiples puntos de registro'
      ],
      results: [
        { value: 'End-to-End', label: 'Desarrollo completo' },
        { value: 'QR', label: 'Trazabilidad total' },
        { value: 'Producción', label: 'Sistema operativo real' }
      ]
    },
    en: {
      title: 'QR-Based Cylinder Tracking Platform for Internal Logistics Control',
      subtitle: 'Professional Project | Full-Stack Developer',
      problem: 'End-to-end system for QR-based gas cylinder traceability, controlling the operational flow from pickup to final return and integrating with the company ERP.',
      role: 'Full-Stack Developer',
      summary: 'Internal application developed end-to-end to manage and track gas cylinders using QR codes at Gases de la Costa S. A.',
      architecture: [
        'Complete system design and implementation: backend, frontend and operational flow',
        'Backend business logic for cylinder state control and traceability',
        'REST APIs to register movements and synchronize with ERP',
        'Field-optimized web frontend with QR scanning through device camera',
        'Relational model representing the full cylinder lifecycle',
        'Deployment and configuration in a production environment'
      ],
      challenges: [
        'Designing a system from scratch aligned with the real logistics workflow',
        'Implementing full traceability across multiple operational stages',
        'Integrating with ERP without affecting existing operations',
        'Optimizing user experience for mobile devices in the field',
        'Ensuring data consistency across multiple registration points'
      ],
      results: [
        { value: 'End-to-End', label: 'Full development' },
        { value: 'QR', label: 'Full traceability' },
        { value: 'Production', label: 'Real operating system' }
      ]
    }
  }
];

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const projectModal = document.getElementById('projectModal');
const contactForm = document.getElementById('contactForm');

function getTranslation(path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), translations[currentLanguage]) || path;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = translations[currentLanguage].meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', translations[currentLanguage].meta.description);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', translations[currentLanguage].meta.description);

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute('content', translations[currentLanguage].meta.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = getTranslation(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', getTranslation(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === currentLanguage);
    button.setAttribute('aria-pressed', button.dataset.lang === currentLanguage ? 'true' : 'false');
  });
}

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData.map((project) => {
    const content = project[currentLanguage];
    const categoryLabel = getTranslation(`projects.filters.${project.type}`);

    return `
      <div class="project-card" data-type="${escapeHtml(project.type)}">
        <div class="project-header">
          <div class="project-meta">
            <span class="project-type ${escapeHtml(project.type)}">${escapeHtml(categoryLabel)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(content.title)}</h3>
          <p class="project-problem">${escapeHtml(content.problem)}</p>
        </div>
        <div class="project-stack">
          ${project.technologies.map((tech) => `<span class="stack-tag">${escapeHtml(tech)}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span class="project-role"><strong>${escapeHtml(getTranslation('projects.role'))}:</strong> ${escapeHtml(content.role)}</span>
          <a href="#" class="project-link" onclick="openProjectModal('${escapeHtml(project.id)}', event)">
            ${escapeHtml(getTranslation('projects.detail'))}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join('');

  applyProjectFilter();
}

function applyProjectFilter() {
  const activeButton = document.querySelector('.filter-btn.active');
  const filter = activeButton ? activeButton.dataset.filter : 'all';
  document.querySelectorAll('.project-card').forEach((card) => {
    card.style.display = filter === 'all' || card.dataset.type === filter ? 'block' : 'none';
  });
}

function openProjectModal(projectId, clickEvent) {
  if (clickEvent) clickEvent.preventDefault();

  const project = projectsData.find((item) => item.id === projectId);
  if (!project) return;

  const content = project[currentLanguage];
  const sections = translations[currentLanguage].projects.sections;

  document.getElementById('modalTitle').textContent = content.title;
  document.getElementById('modalSubtitle').textContent = content.subtitle;

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-section">
      <h4 class="modal-section-title">${escapeHtml(sections.summary)}</h4>
      <p class="modal-section-content">${escapeHtml(content.summary)}</p>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title">${escapeHtml(sections.architecture)}</h4>
      <div class="modal-section-content"><ul>${content.architecture.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title">${escapeHtml(sections.challenges)}</h4>
      <div class="modal-section-content"><ul>${content.challenges.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title">${escapeHtml(sections.technologies)}</h4>
      <div class="modal-tech-stack">${project.technologies.map((tech) => `<span class="stack-tag">${escapeHtml(tech)}</span>`).join('')}</div>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title">${escapeHtml(sections.results)}</h4>
      <div class="modal-results">
        ${content.results.map((result) => `<div class="result-card"><div class="result-value">${escapeHtml(result.value)}</div><div class="result-label">${escapeHtml(result.label)}</div></div>`).join('')}
      </div>
    </div>
  `;

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
}

function setLanguage(language) {
  if (!supportedLanguages.includes(language)) return;
  currentLanguage = language;
  localStorage.setItem('portfolioLanguage', language);
  applyTranslations();
  renderProjects();
  closeMobileMenu();
}

window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.closeMobileMenu = closeMobileMenu;

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

navToggle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    mobileMenu.classList.toggle('active');
  }
});

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    applyProjectFilter();
  });
});

projectModal.addEventListener('click', (event) => {
  if (event.target === projectModal) closeProjectModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeProjectModal();
});

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };

    if (!window.emailjs || typeof SERVICE_ID === 'undefined' || typeof TEMPLATE_ID === 'undefined') {
      alert(translations[currentLanguage].contact.alerts.error);
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
      .then(() => {
        alert(translations[currentLanguage].contact.alerts.success);
        contactForm.reset();
      })
      .catch((error) => {
        alert(translations[currentLanguage].contact.alerts.error);
        console.error(error);
      });
  });
}

applyTranslations();
renderProjects();
