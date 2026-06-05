import { Header } from '~/components/Header'

export function meta() {
  return [
    { title: 'Meu Portfólio - Vittor' },
    { name: 'description', content: 'Bem-vindo ao meu portfólio' },
  ]
}

export default function Home() {
  return <Header />
}
