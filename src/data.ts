import { Project, Experience, SkillCategory, Certification, SoftSkill } from './types';

export const PERSONAL_INFO = {
  name: 'Subham Sahoo',
  title: 'Building Scalable Full-Stack AI Solutions',
  subTitle: 'Computer Science & Engineering undergrad passionate about algorithmic problem-solving and full-stack engineering.',
  about: 'I am a highly driven Computer Science undergraduate specialized in building intelligent full-stack applications. With a solid foundation in algorithmic thinking and modern web technologies, I bridge the gap between complex artificial intelligence models and sleek, user-friendly client interfaces. I thrive in hackathons, fast-paced development environments, and collaborative teams.',
  education: {
    institution: 'Chennai Institute of Technology',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    duration: '2024 - 2028',
    grade: '8.9/10 CGPA',
    highlights: [
      'Focus on Advanced Data Structures & Algorithms',
      'Active core member of the AI/ML and Web Development Club',
      'Consistent top performer in academic and practical engineering challenges'
    ]
  },
  socials: {
    linkedin: 'https://linkedin.com/in/subham-sahoo',
    github: 'https://github.com/subham-sahoo',
    email: 'mailto:project4315@gmail.com'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'guardianlink',
    title: 'GuardianLink',
    description: 'A low-latency, cross-platform emergency response Progressive Web App (PWA) providing real-time AI hazard triage and dynamic indoor/outdoor geospatial evacuation pathfinding during active crises.',
    tags: ['Next.js', 'Firebase', 'LLaMa 4', 'Qwen 3.6', 'Progressive Web App (PWA)', 'Leaflet.js', 'websockets'],
    category: 'Full-Stack',
    github: 'https://github.com/subham-sahoo/guardianlink',
    demo: 'https://guardianlink-demo.subhamsahoo.dev',
    features: [
      'Optimized end-to-end data telemetry to deliver sub-3 second localized emergency routing via zero-friction QR-code positioning.',
      'Architected a multimodal data ingestion system using open-weight LLaMa 4 and Qwen 3.6 models for frame-by-frame visual hazard assessment with strictly structured JSON payload outputs.',
      'Implemented dynamic graph-recalculation on a Leaflet.js engine using OpenStreetMap coordinates to instantaneously adapt safe routes around shifting incident roadblocks.'
    ]
  },
  {
    id: 'navx',
    title: 'NavX',
    description: 'An intelligent, map-digitizing navigation system that converts physical layout schematics into interactive multi-floor pathfinding graphs with localized natural language support.',
    tags: ['Next.js', 'MongoDB', 'Gemini API', 'Graph Theory', 'Map Digitization', 'Coordinate Synchronization'],
    category: 'AI/ML',
    github: 'https://github.com/subham-sahoo/navx',
    demo: 'https://navx-demo.subhamsahoo.dev',
    features: [
      'Engineered a custom graph abstraction layer capable of modeling complex multi-floor vertical transitions, executing Dijkstra’s Algorithm for real-time routing.',
      'Integrated a context-aware AI concierge via the Gemini API to parse ambiguous natural language spatial queries into structured path coordinates.',
      'Designed an automated coordinate mapping matrix syncing visual QR codes to absolute physical floor layouts for instantaneous user self-positioning.'
    ]
  },
  {
    id: 'smart-heart',
    title: 'Smart Heart',
    description: 'A high-throughput clinical analytical engine combining ECG and PCG deep learning architectures for automated cardiovascular risk forecasting and explainable visual medical triage.',
    tags: ['Python', 'FastAPI', 'Next.js', 'Deep Learning', 'Digital Signal Processing (DSP)', 'Grad-CAM', 'Multi-Modal Data Fusion'],
    category: 'AI/ML',
    github: 'https://github.com/subham-sahoo/smart-heart',
    demo: 'https://smartheart-demo.subhamsahoo.dev',
    features: [
      'Designed a decoupled, asynchronous FastAPI processing backend utilizing multi-threading to handle raw signal uploads and model execution concurrently without thread-blocking.',
      'Built a digital signal processing (DSP) pipeline that dynamically transforms raw phonocardiogram (PCG) acoustics into high-fidelity Mel-spectrogram tensors for neural network consumption.',
      'Implemented Grad-CAM visualization modules to calculate and project model attention maps over 1D and 2D signal data, providing explainable, audit-ready diagnostic assets.'
    ]
  },
  {
    id: 'intervion-ai',
    title: 'Intervion AI',
    description: 'An adaptive, industrial-grade career assessment simulator leveraging local large language models to construct real-time resume parsing, runtime coding execution sandboxes, and behavioral analysis.',
    tags: ['React', 'TypeScript', 'Python', 'LLaMa 3.1', 'Mistral', 'Natural Language Processing (NLP)', 'Prompt Engineering'],
    category: 'Full-Stack',
    github: 'https://github.com/subham-sahoo/intervion-ai',
    demo: 'https://intervion-demo.subhamsahoo.dev',
    features: [
      'Engineered an adaptive prompt-chaining framework using LLaMa 3.1 and Mistral to systematically isolate structural resume data and dynamically generate highly specific, non-linear technical interview questions.',
      'Built a secure, sandboxed code execution runtime capable of compiling, parsing, and verifying user program solutions against automated algorithmic time-complexity parameters.',
      'Developed complex data visualization telemetry dashboards with TypeScript and Recharts to map unstructured performance transcripts into readable multi-metric user readiness metrics.'
    ]
  },
  {
    id: 'innovex',
    title: 'INNOVEX',
    description: 'An AI-driven, gamified enterprise accelerator platform for universities designed to orchestrate semantic mentor-investor matchmaking, real-time ecosystem telemetry, and agile startup tracking.',
    tags: ['Next.js', 'Supabase', 'pgvector', 'Vector Search', 'Groq', 'Llama 3.3 70B', 'Hugging Face Embeddings'],
    category: 'AI/ML',
    github: 'https://github.com/subham-sahoo/innovex',
    demo: 'https://innovex-demo.subhamsahoo.dev',
    features: [
      'Architected an advanced vector search infrastructure leveraging Supabase (pgvector) and Hugging Face (gte-small embeddings) to execute sub-second multi-metric matchmaking across user profiles.',
      'Engineered an asynchronous multi-LLM data orchestration layer utilizing Groq (Llama 3.3 70B and Llama 3.1 8B) to automatically compute low-latency strategic analytics reports and dynamic gamified challenges.',
      'Constructed a highly interactive pipeline UI utilizing @dnd-kit for drag-and-drop Kanban deal-flow states alongside real-time data visualizations via Recharts.'
    ]
  },
  {
    id: 'blocktracked',
    title: 'BlockTrackEd',
    description: 'A multi-portal Web3 decentralized application (dApp) leveraging immutable smart contracts to eliminate financial intermediaries and secure transparent scholarship allocation workflows.',
    tags: ['Solidity', 'Ethers.js', 'MetaMask', 'Web3 Integration', 'Ethereum Sepolia', 'Smart Contracts', 'TypeScript', 'Role-Based Access Control (RBAC)'],
    category: 'Full-Stack',
    github: 'https://github.com/subham-sahoo/blocktracked',
    demo: 'https://blocktracked-demo.subhamsahoo.dev',
    features: [
      'Authored secure, gas-optimized Solidity smart contracts implementing OpenZeppelin standards, role-based access vectors, and strict ReentrancyGuard structural defenses against exploit vectors.',
      'Developed a seamless Web3 wallet state synchronization mechanism using Ethers.js and MetaMask to dynamically render cryptographic portal routes based on verified contract mapping signatures.',
      'Implemented rigorous runtime schema validation on the client side using Zod and React Hook Form to guarantee transaction data sanitation before pushing payloads to the Sepolia test network.'
    ]
  },
  {
    id: 'think-book',
    title: 'Think-book',
    description: 'A modular, high-performance React note management application featuring full-text lookahead indexing, offline-first persistence architectures, and secure tokenized authentication loops.',
    tags: ['React', 'TypeScript', 'Client-Side Indexing', 'Offline-First Architecture', 'Local Storage Serialization', 'JWT Authentication'],
    category: 'Full-Stack',
    github: 'https://github.com/subham-sahoo/think-book',
    demo: 'https://thinkbook-demo.subhamsahoo.dev',
    features: [
      'Designed a highly predictable centralized state matrix using the React Context API to manage real-time structural data binding across complex notebook and tag trees.',
      'Implemented an offline-first state strategy utilizing a localized localStorage/IndexedDB serialization pipeline that preserves user workspace operations during network interruptions.',
      'Engineered a low-latency, linear client-side search engine capable of parsing and filtering voluminous text data blocks instantly using custom tag filters and RegEx indexing.'
    ]
  },
  {
    id: 'mini-games-hub',
    title: 'Mini Games Hub',
    description: 'A micro-architected Node.js/Express server optimized for high-speed delivery of raw browser-native client assets and low-overhead browser application deployment.',
    tags: ['Node.js', 'Express.js', 'Static File Hosting', 'Modular Routing', 'Error Middleware', 'HTML5 Canvas', 'DOM Optimization'],
    category: 'Full-Stack',
    github: 'https://github.com/subham-sahoo/mini-games-hub',
    demo: 'https://minigames-demo.subhamsahoo.dev',
    features: [
      'Configured a highly optimized Express static middleware asset pipeline to serve modular client-side game bundles efficiently with minimal server overhead.',
      'Designed decoupled, resilient routing modules implementing structured global error-handling catch blocks for 404 and 500 server cascades.',
      'Architected isolated, self-contained browser environments using pure Vanilla JavaScript game loops, rendering real-time physics and canvas coordinates strictly via client-side DOM optimizations.'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    company: 'Influenco',
    role: 'Frontend Developer Intern',
    duration: 'May 2026 - June 2026',
    achievements: [
      'Architected high-fidelity web dashboards with rich interactive tables, boosting client-side metrics and decreasing load latencies by 35%.',
      'Developed fully responsive, component-driven layouts utilizing Tailwind CSS and Framer Motion for smooth client onboarding journeys.',
      'Optimized performance scores by refactoring heavy state-dependent React modules into clean primitive-dependency hooks.'
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']
  },
  {
    id: 'exp2',
    company: 'Dynx Business Solutions',
    role: 'Full Stack Web Developer Intern',
    duration: 'November 2025',
    achievements: [
      'Built clean RESTful APIs in Node.js/Express to handle core database queries, handling transactional updates with robust error handling.',
      'Designed database schemas in MongoDB to accommodate dynamic high-volume logging data for corporate performance monitoring.',
      'Created cross-browser secure authentication pipelines incorporating JWT mechanisms and custom verification middleware.'
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Postman']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 70 }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 75 }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 60 },
      { name: 'Supabase', level: 80 }
    ]
  },
  {
    id: 'tools',
    name: 'Developer Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 80 },
      { name: 'Zustand', level: 80 }
    ]
  },
  {
    id: 'aiml',
    name: 'AI/ML',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'LLMs', level: 70 },
      { name: 'NLP', level: 70 }
    ]
  },
  {
    id: 'corescs',
    name: 'Core Computer Science',
    skills: [
      { name: 'Data Structures', level: 92 },
      { name: 'Algorithms', level: 92 },
      { name: 'OOP', level: 85 },
      { name: 'Problem solving', level: 92 }
    ]
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    id: 'soft1',
    title: 'Technical Leadership (Agile Sprints)',
    metric: 'Hackathon Lead',
    description: 'You have won major multi-day hackathons (HackBells 3.0, GDG TechSprint). This proves you can lead technical direction, divide development tasks under extreme time constraints, and ship working code under high pressure.'
  },
  {
    id: 'soft2',
    title: 'Algorithmic Grit & Analytical Thinking',
    metric: 'Continuous Grit',
    description: 'Consistency is hard. Solving 900+ highly complex data structure problems requires intense mental stamina, structural debugging capabilities, and deep optimization focus.'
  },
  {
    id: 'soft3',
    title: 'Rapid Architectural Adaptability',
    metric: 'Full-Stack Adaptability',
    description: 'Your project portfolio transitions smoothly from blockchain decentralization (BlockTrackEd) to Deep Learning audio tensors (Smart Heart) to advanced AI vector search. You possess the ability to rapidly learn an entirely new framework or API and implement it within weeks.'
  },
  {
    id: 'soft4',
    title: 'Cross-Functional Collaboration',
    metric: 'Team Collaboration',
    description: 'Your internships required collaborating directly with backend developers, product owners, and clients to translate loose requirements into pixel-perfect, production-ready REST integrations.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert1',
    title: 'Google AIML Certification',
    issuer: 'Google',
    date: '2025'
  },
  {
    id: 'cert2',
    title: 'NPTEL Python Data Analytics',
    issuer: 'NPTEL',
    date: '2025'
  },
  {
    id: 'cert3',
    title: 'NPTEL Internet of Things (IoT)',
    issuer: 'NPTEL',
    date: '2024'
  },
  {
    id: 'cert4',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025'
  },
  {
    id: 'cert5',
    title: 'IBM AI Fundamentals',
    issuer: 'IBM',
    date: '2024'
  }
];
