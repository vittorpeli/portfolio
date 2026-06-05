import { profile } from "~/data/profile"

export function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profile.skills.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
            <ul className="list-disc list-inside">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
