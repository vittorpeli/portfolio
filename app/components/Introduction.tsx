import { profile } from "~/data/profile"

export function Introduction() {
  return (
    <section className="py-12">
      <p>{profile.introduction}</p>
    </section>
  )
}
