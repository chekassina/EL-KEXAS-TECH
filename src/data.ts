import { Project, Service, Skill, Testimonial, FAQItem, StatItem } from './types';

export const COMPAN_Y_INFO = {
  name: 'EL KEXAS TECH',
  founder: 'Che Kassina Kum',
  role: 'Software Engineer',
  degree: 'Bachelor’s degree in Computer Engineering specializing in Software Engineering',
  university: 'University of Buea',
  phone: '+237 675036469',
  email: 'chekassinakum@gmail.com',
  location: 'Buea, Cameroon',
  github: 'https://github.com/che-kassina-kum/',
  linkedin: 'https://www.linkedin.com/in/che-kassina-kum',
  whatsappBaseUrl: 'https://wa.me/237675036469?text=Hello%20EL%20KEXAS%20TECH,%20I%20need%20your%20services.',
  cvDownloadUrl: '#',
  taglines: [
    'Innovating Through Technology',
    'Smart Solutions For A Digital World',
    'Engineering Modern Digital Experiences',
    'Turning Ideas Into Digital Solutions',
    'Your Trusted Technology Partner'
  ]
};

export const STATISTICS: StatItem[] = [
  { value: 20, suffix: '+', label: 'Completed Projects' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Technologies Used' },
  { value: 3, suffix: '+', label: 'Years Experience' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Innovative Solutions',
    description: 'We build modern and scalable software solutions tailored to your needs.',
    icon: 'Lightbulb'
  },
  {
    title: 'Professional Support',
    description: 'Reliable customer support and system maintenance services.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Modern Technologies',
    description: 'We use advanced technologies like React, Laravel, React Native, MySQL, and REST APIs.',
    icon: 'Cpu'
  },
  {
    title: 'Fast Delivery',
    description: 'Projects delivered efficiently with quality assurance.',
    icon: 'Zap'
  },
  {
    title: 'Affordable Services',
    description: 'Professional services at competitive prices.',
    icon: 'DollarSign'
  },
  {
    title: 'Trusted Expertise',
    description: 'Strong background in software engineering, IT support, and digital solutions.',
    icon: 'Award'
  }
];

export const SERVICES: Service[] = [
  // SOFTWARE DEVELOPMENT SERVICES
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Modern business websites, portfolios, dashboards, and management systems built with high performance.',
    category: 'software',
    icon: 'Globe',
    subservices: ['Dynamic Admin Dashboards', 'E-commerce Platforms', 'Corporate Landing Pages', 'Custom CMS Panels']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Cross-platform Android and iOS applications using React Native for a beautiful, fluid experience.',
    category: 'software',
    icon: 'Smartphone',
    subservices: ['Android & iOS Apps', 'Real-time Synchronization', 'Offline-First Applications', 'Push Notifications']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Modern, user-friendly, and responsive user-interface and interaction designs tailored for your target audience.',
    category: 'software',
    icon: 'Palette',
    subservices: ['Figma Prototypes', 'Responsive Layouts', 'Interactive Wireframes', 'Visual Brand Systems']
  },
  {
    id: 'api-dev',
    title: 'API & Backend Development',
    description: 'Secure, high-performance REST APIs, custom authentication systems, and cloud integration protocols.',
    category: 'software',
    icon: 'Server',
    subservices: ['REST API Deployments', 'JWT Authentication', 'Third-Party Webhook Synclink', 'Microservices Architecture']
  },
  {
    id: 'db-management',
    title: 'Database Management',
    description: 'Relational database architecture, queries engineering, optimization, data modeling, and automated backups.',
    category: 'software',
    icon: 'Database',
    subservices: ['MySQL & PostgreSQL Setup', 'Query Speed Tuning', 'Automated Daily Backups', 'Relational Schema Design']
  },

  // ACADEMIC & RESEARCH SERVICES
  {
    id: 'proposal-writing',
    title: 'Proposal Writing',
    description: 'Professional thesis and business proposal development outlining clear methodology, objectives, and structures.',
    category: 'academic',
    icon: 'FileText',
    subservices: ['Research Hypotheses Formulation', 'Detailed Methodology Design', 'Literature Review Scaffolding', 'Budget & Timeline Modeling']
  },
  {
    id: 'final-year-projects',
    title: 'Final Year Projects Development',
    description: 'Development of robust academic software projects paired with thorough chapters documentation and testing support.',
    category: 'academic',
    icon: 'GraduationCap',
    subservices: ['Full-stack Software Artifacts', 'Chapters 1-5 Comprehensive Writing', 'Visual Diagrams & Architectural Flow charts', 'System Defense Oral Preparations']
  },
  {
    id: 'seminar-reports',
    title: 'Seminar Reports Assistance',
    description: 'Professional drafting, formatting, and structuring of seminar reports with contemporary references.',
    category: 'academic',
    icon: 'BookOpen',
    subservices: ['Technical Research Summaries', 'Proper Academic Citation (APA, IEEE)', 'Executive Dashboard Snapshots', 'Document Formatting (LaTeX/Word)']
  },
  {
    id: 'thesis-formatting',
    title: 'Thesis & Project Formatting',
    description: 'Structural and aesthetic polishing of academic drafts to meet stringent school publishing criteria.',
    category: 'academic',
    icon: 'AlignLeft',
    subservices: ['IEEE, APA & Harvard Style Adapts', 'Dynamic Indexing & Custom Layouts', 'Citation Cleanups', 'File Integrity Checks']
  },
  {
    id: 'ppt-design',
    title: 'Presentation Design (PowerPoint)',
    description: 'High-impact slide decks inspired by top design agencies, with pristine margins, typography, and visuals.',
    category: 'academic',
    icon: 'Presentation',
    subservices: ['Defense Presentation Slides', 'Investor Pitch Decks', 'Data Visualizations & Infographics', 'Custom Vector Themes & Fluid Animations']
  },

  // PROFESSIONAL DOCUMENT SERVICES
  {
    id: 'cv-writing',
    title: 'CV & Resume Writing',
    description: 'Creating ATS-friendly, elegant resumes that secure interview shortlists and match your technical focus.',
    category: 'document',
    icon: 'FileUser',
    subservices: ['ATS-Compliant Structural Formats', 'Action-Oriented Verbs Coaching', 'Clean Minimalist Visual Layouts', 'Tailored LinkedIn Profiles Synergy']
  },
  {
    id: 'cover-letters',
    title: 'Cover Letter Creation',
    description: 'Professional, compelling, and persuasive letters customized for competitive vacancy applications.',
    category: 'document',
    icon: 'MailOpen',
    subservices: ['Direct Value-Proposition Hooking', 'Company-Centric Tailoring', 'Polished Commercial Writing', 'Call-to-Action Closing Strategies']
  },
  {
    id: 'company-profile',
    title: 'Company Profile Design',
    description: 'Comprehensive business profiles and catalog layouts that convey professionalism, value, and robust vision.',
    category: 'document',
    icon: 'Notebook',
    subservices: ['Company Mission & Vision Visuals', 'Product & Services Catalogues', 'Founder Biographies layout', 'Case Studies formatting']
  },
  {
    id: 'business-proposal',
    title: 'Business Proposal Writing',
    description: 'Drafting winning commercial and government tenders, expressing complex service strategies with extreme clarity.',
    category: 'document',
    icon: 'Briefcase',
    subservices: ['Pricing & Costing Matrix Layouts', 'Service Level Agreements phrasing', 'Technical Spec Sheets detailing', 'Executive Summaries drafting']
  },

  // COMPUTER SOLUTIONS SERVICES
  {
    id: 'windows-os',
    title: 'Windows Installation & Activation',
    description: 'Fresh operating system installation, complete drivers tuning, system speedup, and secure genuine setups.',
    category: 'computer_solutions',
    icon: 'Monitor',
    subservices: ['Windows 10/11 Pro Setup', 'Hardware Device Driver Synthesis', 'Registry Speed Optimizations', 'Bloatware Purging & Core Polishing']
  },
  {
    id: 'pc-repair',
    title: 'PC Repair & Hardware Maintenance',
    description: 'Physical cleaning, dry paste replacement, parts diagnostics, troubleshooting, and upgrade pathways planning.',
    category: 'computer_solutions',
    icon: 'Wrench',
    subservices: ['Ram & High-speed SSD Upgrades', 'Thermal Re-pasting for CPUs/GPUs', 'Diagnostic Testing of Motherboards', 'Battery & Screen Replacements']
  },
  {
    id: 'networking-support',
    title: 'Networking & Wifi Troubleshooting',
    description: 'Configuring safe home or office setups with reliable IP distributions, routers tuning, and network safety audits.',
    category: 'computer_solutions',
    icon: 'Network',
    subservices: ['Router & Access Point Tuning', 'LAN Cabling & Terminations', 'Network Access Filtering', 'File and Printer Sharing Defaults']
  },
  {
    id: 'printer-config',
    title: 'Printer & Peripheral Setup',
    description: 'Installation of office printers, scanner drivers, wireless networking prints, and general peripherals setup.',
    category: 'computer_solutions',
    icon: 'Printer',
    subservices: ['Wireless Network Printing Config', 'Multi-function Scanner setup', 'Drivers Integrity restoration', 'Print Spooler fixups']
  },
  {
    id: 'backup-recovery',
    title: 'System Backup & Data Recovery',
    description: 'Automated document shadows setup and recovering deleted files/formatted disk contents safely.',
    category: 'computer_solutions',
    icon: 'FolderSync',
    subservices: ['Encrypted Off-site Backup Plans', 'Forensic Data Extraction helper', 'Accidental Format Rollbacks', 'Automated Cloud Vault Syncs']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'school-attendance',
    title: 'School Attendance System',
    category: 'software',
    description: 'A mobile application developed to track and manage school attendance in real-time. Designed to streamline student management and generate audit-ready academic reports.',
    technologies: ['React Native', 'Node.js/Express', 'REST APIs', 'MySQL'],
    features: [
      'Real-time attendance tracking with instant records updates',
      'Student profile dashboards with unique identifier tags',
      'Instant attendance report spreadsheet generation and automated PDF summaries',
      'Cross-platform Android & iOS compatibility with modern flat UI features'
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'virtual-study',
    title: 'Virtual Study Platform',
    category: 'software',
    description: 'A robust web-based online educational portal built to stimulate student engagement, streamline lecture distribution, and manage course assessments.',
    technologies: ['PHP Laravel', 'Blade Template Engine', 'MySQL', 'Bootstrap 5', 'Tailwind CSS'],
    features: [
      'Flexible Course Enrollment and curriculum flow controls',
      'Integrated HTML5 Video Lectures with responsive progress saves',
      'Interactive online quizzes featuring timed questions and automated grading cards',
      'Detailed Student Progress reports and analytics dashboards'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'road-sign-app',
    title: 'Mobile-Based Sign & Road Notification App',
    category: 'software',
    description: 'A smart computer-vision-powered mobile application designed to identify physical traffic signs and notify motorists in real-time of upcoming road regulations and potential hazards.',
    technologies: ['React Native', 'Computer Vision/OpenCV', 'REST APIs', 'MySQL / SQLite', 'Google Maps API'],
    features: [
      'Intelligent Computer Vision camera stream sign detection',
      'Loud, eye-safe acoustic road safety hazard notifications',
      'Fluid interactive route planners showing real-time speed limit zones',
      'Crowdsourced hazard reporting database with real-time syncs'
    ],
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'academic-thesis-1',
    title: 'Biometric Security Proposals',
    category: 'academic',
    description: 'A comprehensively formatted academic proposal detailing the implementation of fingerprint credentials on remote banking modules.',
    technologies: ['Academic Writing', 'LateX', 'PDF Formatting', 'Biometric Solutions'],
    features: [
      'Thorough analysis of fingerprint sensory APIs and hardware configurations',
      'Secure cryptographic authentication handshakes conceptual frameworks',
      'Strict APA structural layout featuring dynamic referencing standards',
      'Detailed project milestones gantt charts and pricing breakdowns'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'computer-setup-1',
    title: 'Office Hardware Deployment',
    category: 'computer_solution',
    description: 'An expansive Windows system provisioning, driver setup, network configuration, and printer synchronization project carried out for a local startup in Buea.',
    technologies: ['Windows Troubleshooting', 'IPv4 Cabling', 'Print Servers', 'Driver Audits'],
    features: [
      '15+ Workstation terminal Windows 11 installs and security group policies setup',
      'Dual router networking backbone with smart IP distributions and print hubs',
      'Centralized network storage folder configurations enabling safe team data swaps',
      'Acoustic hardware tests and driver optimizations'
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200'
  }
];

export const SKILLS: Skill[] = [
  // FRONTEND
  { name: 'React', category: 'frontend', level: 90, description: 'Single Page Applications, custom hooks, and state managers.' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 95, description: 'Modern language mechanics, asynchronous code, and functional patterns.' },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, description: 'Responsive layout sheets, utility classes, and custom utility variables.' },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 95, description: 'Semantic tags layout, flex/grid structures, and typography.' },

  // BACKEND
  { name: 'PHP', category: 'backend', level: 85, description: 'Server scripting, MVC structures, and modern language APIs.' },
  { name: 'Laravel', category: 'backend', level: 80, description: 'Eloquent ORM, API routing, middlewares, and server caching.' },
  { name: 'REST APIs', category: 'backend', level: 90, description: 'Secure interfaces design, rate limits, and JSON processing structures.' },

  // MOBILE DEVELOPMENT
  { name: 'React Native', category: 'mobile', level: 85, description: 'Cross-platform native bridges, mobile component lists, and device sensors API.' },

  // DATABASES
  { name: 'MySQL', category: 'databases', level: 90, description: 'Relational design, indices optimization, and nested JOIN procedures.' },
  { name: 'SQL', category: 'databases', level: 88, description: 'Relational algebra query formulations, schemas audits, and backups creation.' },

  // TOOLS & TECHNOLOGIES
  { name: 'Git & GitHub', category: 'tools', level: 90, description: 'Version control workflows, branching structures, and cloud PR pipelines.' },
  { name: 'Microsoft Office 365', category: 'tools', level: 95, description: 'Advanced Word templates, academic referencing tools, and PowerPoint design.' },
  { name: 'Windows Administration', category: 'tools', level: 90, description: 'OS deployments, drivers configurations, and registry safety edits.' },
  { name: 'Networking Fundamentals', category: 'tools', level: 85, description: 'IPv4 subnets configurations, secure DNS filters, and Wi-Fi access paths.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'EL KEXAS TECH delivered a professional and modern website that exceeded expectations. Highly recommended for any business going digital.',
    author: 'Tabot Emmanuel',
    role: 'Managing Director, Horizon Group',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'Professional service delivery and excellent communication throughout the final year project software development lifecycle. Saved tons of formatting stress.',
    author: 'Neba Clinton',
    role: 'Computer Engineering Graduate',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Reliable software solutions, robust technical expertise, and outstanding local IT support. Our office network and system security have never been tighter.',
    author: 'Fabiola Ngassa',
    role: 'Operations Lead, Apex Consulting',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you build custom websites?',
    answer: 'Yes! We design and engineer modern, fast, and fully responsive custom websites. This includes business presentation landing pages, interactive portfolios, administration dashboards, custom e-commerce interfaces, and management database systems, tailored exactly to clients’ specifications.'
  },
  {
    id: 'faq-2',
    question: 'Do you develop mobile applications?',
    answer: 'Yes! We write cross-platform mobile applications for both Android and iOS devices using React Native. This guarantees high-performance native-speed executions, unified layouts across devices, real-time database integrations, push notifications, and offline-first capabilities.'
  },
  {
    id: 'faq-3',
    question: 'Do you help with academic and research projects?',
    answer: 'Yes! We provide professional support for academic and research goals. This includes development of software modules for final-year projects, academic proposals writing, drafting detailed seminar reports, and meticulous thesis formatting (APA, IEEE, Harvard standards) to meet university standards.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer computer repair and IT support services?',
    answer: 'Yes! We offer complete corporate and personal IT support in Buea and remotely. Our capabilities involve Windows OS diagnostic installs and software configurations, hardware upgrades (RAM & ultra-speed SSDs), motherboard diagnostics, office Wi-Fi network cabling setup, wireless printer synchronization, and data recovery plans.'
  },
  {
    id: 'faq-5',
    question: 'How do we start a project and what are your rates?',
    answer: 'You can initiate collaboration by completing the Contact form or initiating a live chat on WhatsApp (+237 675036469). We assess your technical goals and project requirements, provide a free blueprint breakdown, and deliver a competitive price quote. We maintain client-friendly, transparent pricing designed to support students, startups, and growing institutions.'
  }
];
