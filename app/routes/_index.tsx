import { Header } from '~/components/Header'
import { Introduction } from '~/components/Introduction'
import { Skills } from '~/components/Skills'
import { Experience } from '~/components/Experience'
import { Education } from '~/components/Education'

export function meta() {
  return [
    { title: 'Meu Portfólio - Vittor' },
    { name: 'description', content: 'Bem-vindo ao meu portfólio' },
  ]
}

export default function Home() {
  return (
    <main className="mx-auto my-6 max-w-2xl px-6 font-sans">
      <section className="py-12">
        <Header />
      </section>
      <Introduction />
      <Skills />
      <Experience />
      <Education />

      <footer>
        <p className="text-center">Vittor</p>
      </footer>
    </main>
  )
}
