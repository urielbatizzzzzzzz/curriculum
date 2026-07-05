// Contenido bilingüe centralizado. Editar aquí actualiza todo el sitio.
// Toda la información vive en un solo lugar para mantenerlo fácil de actualizar.

export const content = {
  es: {
    nav: {
      about: 'Perfil',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      cv: 'Descargar CV',
    },
    hero: {
      name: 'Uriel Castorela Cuevas',
      role: 'Ingeniero en Inteligencia Artificial',
      tagline: 'Arquitecturas Multi-Tenant · Fintech · Optimización Algorítmica',
      intro:
        'Construyo sistemas SaaS de alta disponibilidad y motores transaccionales robustos. Me especializo en arquitecturas multi-tenant seguras y en resolver cuellos de botella de concurrencia mediante refactorización asíncrona y optimización algorítmica.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV (PDF)',
      location: 'Ciudad de México',
    },
    about: {
      title: 'Perfil Profesional',
      body: 'Ingeniero de software enfocado en la construcción de sistemas SaaS de alta disponibilidad y motores transaccionales robustos. Experiencia diseñando arquitecturas multi-tenant seguras con aislamiento estricto de datos y enrutamiento dinámico. Especializado en resolver cuellos de botella en procesamiento concurrente mediante refactorización asíncrona y optimización algorítmica.',
      highlights: [
        { value: '100%', label: 'Retención de integridad de datos multi-tenant' },
        { value: 'Async', label: 'Refactorización de cuellos de botella bloqueantes' },
        { value: 'A* / GBFS', label: 'Optimización de búsqueda informada' },
      ],
    },
    projects: {
      title: 'Proyectos Técnicos Destacados',
      subtitle: 'Sistemas reales, decisiones de arquitectura y resultados medibles.',
      items: [
        {
          name: 'Castoralia',
          type: 'Sistema SaaS Multi-Tenant',
          summary: 'Plataforma de gestión clínica para múltiples clínicas dentales con aislamiento criptográfico de datos.',
          bullets: [
            'Garanticé el aislamiento criptográfico y la concurrencia segura de datos, alcanzando una retención de integridad del 100% mediante una arquitectura multi-tenant basada en asignación y enrutamiento dinámico de subdominios.',
            'Diseñé el sistema de extremo a extremo, desde la concepción del branding hasta la normalización de la base de datos relacional para soportar historias clínicas a escala.',
          ],
          tags: ['Multi-Tenant', 'PostgreSQL', 'NestJS', 'Arquitectura'],
        },
        {
          name: 'FinWise',
          type: 'Motor Transaccional · Capital One Hackathon',
          summary: 'Motor de sostenibilidad financiera para gestión de deudas con cálculo preciso y máquina de estados.',
          bullets: [
            'Refactoricé un cuello de botella bloqueante hacia una arquitectura asíncrona, habilitando el soporte de picos masivos de usuarios concurrentes sin degradación del servicio.',
            'Implementé un motor de cálculo preciso para gestión de deudas, controlado por una máquina de estados finitos estricta y evaluación dinámica de expresiones algebraicas respetando la precedencia de operadores.',
          ],
          tags: ['Async', 'Máquinas de Estado', 'Fintech', 'Python'],
        },
        {
          name: 'Motores de Resolución Espacial e IA',
          type: 'Optimización Algorítmica',
          summary: 'Solucionadores de búsqueda informada optimizados para memoria en entornos de alta complejidad.',
          bullets: [
            'Reduje la huella de memoria optimizando algoritmos de búsqueda informada (GBFS y A*) en entornos de alta complejidad.',
            'Escalé desde mallas de 9×7 hasta problemas dimensionales mayores sobre el runtime nativo de Python.',
          ],
          tags: ['A*', 'GBFS', 'Optimización', 'Python'],
        },
      ],
    },
    skills: {
      title: 'Habilidades Técnicas',
      groups: [
        { label: 'Lenguajes', items: ['Python', 'TypeScript', 'Java'] },
        { label: 'Backend / SaaS', items: ['NestJS', 'React', 'Django'] },
        { label: 'Bases de Datos', items: ['PostgreSQL', 'MySQL', 'Multi-Tenant'] },
        { label: 'Core', items: ['POO', 'A*', 'Máquinas de Estado'] },
      ],
    },
    education: {
      title: 'Educación',
      items: [
        {
          school: 'Escuela Superior de Cómputo (ESCOM — IPN)',
          degree: 'Ingeniería en Inteligencia Artificial',
          detail: 'Cursos relevantes: Arquitectura de Sistemas, Algoritmos, Estructuras de Datos.',
        },
        {
          school: 'CECyT 9 "Juan de Dios Bátiz" (IPN)',
          degree: 'Técnico en Programación',
          detail: '',
        },
      ],
    },
    contact: {
      title: '¿Trabajamos juntos?',
      body: 'Estoy abierto a oportunidades de ingeniería de software, prácticas y colaboración. Escríbeme.',
      email: 'Enviar correo',
    },
    footer: {
      built: 'Hecho con React + Vite · Código abierto en GitHub',
    },
  },

  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      cv: 'Download CV',
    },
    hero: {
      name: 'Uriel Castorela Cuevas',
      role: 'Artificial Intelligence Engineer',
      tagline: 'Multi-Tenant Architectures · Fintech · Algorithmic Optimization',
      intro:
        'I build high-availability SaaS platforms and robust transactional engines. I specialize in secure multi-tenant architectures and in resolving concurrency bottlenecks through asynchronous refactoring and algorithmic optimization.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV (PDF)',
      location: 'Mexico City',
    },
    about: {
      title: 'Professional Summary',
      body: 'Software engineer focused on building high-availability SaaS platforms and robust transactional engines. Experienced in designing secure multi-tenant architectures with strict data isolation and dynamic routing. Specialized in resolving concurrent-processing bottlenecks through asynchronous refactoring and algorithmic optimization.',
      highlights: [
        { value: '100%', label: 'Multi-tenant data-integrity retention' },
        { value: 'Async', label: 'Refactored blocking bottlenecks' },
        { value: 'A* / GBFS', label: 'Informed-search optimization' },
      ],
    },
    projects: {
      title: 'Featured Technical Projects',
      subtitle: 'Real systems, architecture decisions, and measurable results.',
      items: [
        {
          name: 'Castoralia',
          type: 'Multi-Tenant SaaS Platform',
          summary: 'Clinical-management platform for multiple dental clinics with cryptographic data isolation.',
          bullets: [
            'Ensured cryptographic isolation and safe data concurrency, achieving 100% data-integrity retention through a multi-tenant architecture based on dynamic subdomain assignment and routing.',
            'Designed the system end to end, from branding conception to relational database normalization, supporting clinical records at scale.',
          ],
          tags: ['Multi-Tenant', 'PostgreSQL', 'NestJS', 'Architecture'],
        },
        {
          name: 'FinWise',
          type: 'Transaction Engine · Capital One Hackathon',
          summary: 'Financial-sustainability engine for debt management with precise calculation and a state machine.',
          bullets: [
            'Refactored a blocking bottleneck into an asynchronous architecture, enabling support for massive concurrent user spikes with no service degradation.',
            'Implemented a precise debt-management calculation engine, governed by a strict finite state machine and dynamic algebraic-expression evaluation respecting operator precedence.',
          ],
          tags: ['Async', 'State Machines', 'Fintech', 'Python'],
        },
        {
          name: 'Spatial-Resolution & AI Solvers',
          type: 'Algorithmic Optimization',
          summary: 'Memory-optimized informed-search solvers for high-complexity environments.',
          bullets: [
            'Reduced memory footprint by optimizing informed-search algorithms (GBFS and A*) in high-complexity environments.',
            'Scaled from 9×7 grids to higher-dimensional problems on the native Python runtime.',
          ],
          tags: ['A*', 'GBFS', 'Optimization', 'Python'],
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      groups: [
        { label: 'Languages', items: ['Python', 'TypeScript', 'Java'] },
        { label: 'Backend / SaaS', items: ['NestJS', 'React', 'Django'] },
        { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Multi-Tenant'] },
        { label: 'Core', items: ['OOP', 'A*', 'State Machines'] },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          school: 'Escuela Superior de Cómputo (ESCOM — IPN)',
          degree: 'B.S. in Artificial Intelligence Engineering',
          detail: 'Relevant coursework: Systems Architecture, Algorithms, Data Structures.',
        },
        {
          school: 'CECyT 9 "Juan de Dios Bátiz" (IPN)',
          degree: 'Technician in Programming',
          detail: '',
        },
      ],
    },
    contact: {
      title: "Let's work together",
      body: 'I am open to software-engineering opportunities, internships, and collaboration. Reach out.',
      email: 'Send email',
    },
    footer: {
      built: 'Built with React + Vite · Open source on GitHub',
    },
  },
}

export const links = {
  email: 'castorela.cuevas.uriel@gmail.com',
  github: 'https://github.com/urielbatizzzzzzzz',
  linkedin: 'https://www.linkedin.com/in/uriel-castorela-cuevas/',
  cv: {
    es: 'cv/CV_Uriel_Castorela.pdf',
    en: 'cv/CV_Uriel_Castorela_EN.pdf',
  },
}

// Enlaces por proyecto (mismo orden que projects.items en ambos idiomas).
// Cada entrada es una lista de botones { es, en, url }. Deja [] si no hay repo público.
export const projectLinks = [
  // 0 · Castoralia — proyecto privado.
  [],
  // 1 · FinWise
  [
    { es: 'Código', en: 'Code', url: 'https://github.com/urielbatizzzzzzzz/finwise' },
    { es: 'Frontend', en: 'Frontend', url: 'https://github.com/urielbatizzzzzzzz/finwise_front' },
  ],
  // 2 · Motores de Resolución Espacial e IA — proyecto privado.
  [],
]

// Marca los proyectos privados/confidenciales (mismo orden que projects.items).
// Muestra una insignia "Repositorio privado" en lugar de dejar la tarjeta sin enlace.
export const projectPrivate = [true, false, true]
