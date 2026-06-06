import { profile } from "~/data/profile"

export function Education() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {profile.education.map((entry, index) => (
          <div key={index} className="border-l-2 border-zinc-border pl-4">
            <h3 className="text-xl font-semibold">{entry.institution}</h3>
            <p className="text-muted-text">{entry.degree} | {entry.period}</p>
            <p className="mt-2">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
