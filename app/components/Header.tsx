import { FileUser, Mail, MapPin } from "lucide-react"
import { profile } from "~/data/profile"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <title>Github</title>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <title>LinkedIn</title>
      <path d="M20.44 0H3.56A3.56 3.56 0 000 3.56v16.88A3.56 3.56 0 003.56 24h16.88A3.56 3.56 0 0024 20.44V3.56A3.56 3.56 0 0020.44 0zM7.52 19.1H4.26V9.03h3.26v10.07zM5.89 7.68a1.89 1.89 0 110-3.78 1.89 1.89 0 010 3.78zM19.1 19.1h-3.26v-5.1c0-1.22-.02-2.79-1.7-2.79s-1.96 1.33-1.96 2.7v5.19H8.92V9.03h3.13v1.44h.04c.44-.83 1.5-1.7 3.08-1.7 3.29 0 3.9 2.17 3.9 4.98v5.35z" />
    </svg>
  )
}

export function Header() {
  return (
    <header className="flex flex-col items-center gap-6 py-16">
      <div className="size-32 rounded-full bg-linear-to-br from-sky-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
        {profile.name.charAt(0)}
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
          {profile.role}
        </p>
      </div>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <MapPin className="size-4" />
        <span>{profile.location}</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-center rounded-lg bg-gray-100 p-2.5 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          aria-label="Email"
        >
          <Mail className="size-5" />
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg bg-gray-100 p-2.5 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg bg-gray-100 p-2.5 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          aria-label="GitHub"
        >
          <GithubIcon className="size-5" />
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-600"
        >
          <FileUser className="size-5" />
          Currículo
        </a>
      </div>
    </header>
  )
}
