export interface Profile {
  name: string
  role: string
  location: string
  email: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl: string
  photoUrl: string
  introduction: string
  skills: SkillCategory[]
  experience: Experience[]
  education: Education[]
  featuredRepos: string[]
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface Education {
  institution: string
  degree: string
  period: string
}

export const profile: Profile = {
  name: 'Vittor Pelicarto',
  role: 'Desenvolvedor Web',
  location: 'Brasília, Brasil',
  email: 'vittor.pelicarto@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/vittor-pelicarto',
  githubUrl: 'https://github.com/vittorpeli',
  resumeUrl: '/resume.pdf',
  photoUrl: '/avatar.png',
  introduction:
    'Engenheiro de Software com experiência prática no desenvolvimento de aplicações web modernas, responsivas e escaláveis. Histórico comprovado utilizando o ecossistema React e TypeScript, além de vivência fullstack com Node.js e integração de Inteligência Artificial. Habilidade no desenvolvimento guiado a testes (TDD) e na aplicação de boas práticas de arquitetura (DDD e Clean Architecture). Experiente no trabalho sob metodologias ágeis e focado em entregar código limpo e de alta performance.',
  skills: [
    {
      title: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'Next JS',
        'React Router',
        'Tailwind CSS',
        'Shadcn/ui',
        'Sass',
        'Bootstrap',
      ],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'SQLite', 'REST APIs'],
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'Docker', 'Vitest', 'Figma'],
    },
    {
      title: 'Práticas e Metodologias',
      skills: [
        'TDD',
        'DDD',
        'Clean Architecture',
        'Engenharia de Prompts (IA)',
        'Scrum',
        'Kanban',
      ],
    },
  ],
  experience: [
    // {
    //   company: 'Gerador de Prompt',
    //   role: 'Desenvolvedor Fullstack SOLO',
    //   period: 'Atualmente',
    //   description:
    //     'Concepção e desenvolvimento de uma plataforma web focada na geração inteligente de prompts para ferramentas de IA. Integração de assistentes e APIs de Inteligência Artificial ao ecossistema fullstack, otimizando a experiência do usuário.',
    // },
    {
      company: 'SEA Tecnologia',
      role: 'Estagiário de Desenvolvimento Frontend',
      period: 'Mai 2025 - Dez 2025',
      description:
        'Atuação no desenvolvimento e manutenção de interfaces responsivas utilizando React, garantindo alta fidelidade aos protótipos do Figma. Colaboração com o time de desenvolvimento sob metodologias Scrum/Kanban, reduzindo gargalos em entregas de sprints. Otimização de componentes de UI, resultando em melhorias de performance e acessibilidade no produto final.',
    },
    {
      company: 'Autônomo',
      role: 'Desenvolvedor Web Freelancer',
      period: '2022 - Atual',
      description:
        'Criação e entrega de aplicações web sob demanda para clientes finais, cobrindo desde a arquitetura da informação até o deploy. Tradução de requisitos de negócios complexos em interfaces funcionais focadas em conversão e experiência do usuário (UX).',
    },
  ],
  education: [
    {
      institution: 'UNICESUMAR',
      degree: 'Bacharel em Engenharia de Software',
      period: '2022 - 2026',
    },
  ],
  featuredRepos: [
    'vittorpeli/controle-facil',
    'vittorpeli/react-ecom',
    'vittorpeli/api-solid',
  ],
}
