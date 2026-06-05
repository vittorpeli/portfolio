import type { Route } from "./+types/_index"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meu Portfólio - Vittor" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <h1>Meu Portfólio</h1>;
}
