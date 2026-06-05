export interface Profile {
  name: string
  role: string
  location: string
  email: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl: string
  photoUrl: string
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
}
