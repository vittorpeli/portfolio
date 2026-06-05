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
  description: string
}

export const profile: Profile = {
  name: 'Vittor Pelicarto',
  role: 'Desenvolvedor Web',
  location: 'Brasília, Brasil',
  email: 'vittor.pelicarto@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/vittor-pelicarto',
  githubUrl: 'https://github.com/vittorpeli',
  resumeUrl: '/resume.pdf',
  photoUrl: '/avatar.svg',
  introduction:
    'Desenvolvedor Web apaixonado por criar experiências incríveis na web.',
  skills: [
    { title: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'PostgreSQL'] },
    { title: 'Tools', skills: ['Git', 'Docker'] },
  ],
  experience: [
    {
      company: 'Empresa de Exemplo',
      role: 'Desenvolvedor Frontend',
      period: 'Jan 2022 - Presente',
      description: 'Desenvolvimento de interfaces modernas e responsivas.',
    },
  ],
  education: [
    {
      institution: 'UNICESUMAR',
      degree: 'Bacharel em Engenharia de Software',
      period: '2022 - 2026',
      description: 'Foco em engenharia de software e algoritmos.',
    },
  ],
  featuredRepos: [
    'vittorpeli/react-ecom',
    'vittorpeli/api-solid',
    'vittorpeli/controle-facil',
  ],
}
