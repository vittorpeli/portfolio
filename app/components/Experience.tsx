import { profile } from "~/data/profile"

export function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {profile.experience.map((entry, index) => (
          <div key={index} className="border-l-2 border-zinc-border pl-4">
            <h3 className="text-xl font-semibold">{entry.company}</h3>
            <p className="text-muted-text">{entry.role} | {entry.period}</p>
            <p className="mt-2">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
