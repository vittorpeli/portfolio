import { FileUser, Mail, MapPin, Sun, Moon } from 'lucide-react'
import { profile } from '~/data/profile'
import { useTheme } from '~/context/ThemeContext'

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <title>Github</title>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="grid gap-xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-md">
          <div className="grid gap-sm">
            <h1 className="text-2xl font-semibold tracking-[-1.2px] text-foreground-text">
              {profile.name}
            </h1>
            <p className="text-base text-muted-text">{profile.role}</p>
            <div className="flex items-center gap-sm text-muted-text">
              <MapPin className="size-4" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
          <div className="size-32 rounded-full bg-surface-subtle border border-zinc-border flex items-center justify-center text-4xl font-semibold text-foreground-text shrink-0">
            {profile.name.charAt(0)}
          </div>
        </div>

        <button
          onClick={toggleTheme}
          className="inline-flex items-center justify-center p-2 text-foreground-text hover:text-muted-text"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </button>
      </div>

      <div className="flex items-center gap-md">
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-sm bg-near-black-cta px-4 py-2 text-sm font-medium text-cta-text shadow-sm hover:opacity-90"
        >
          <FileUser className="size-5" />
          Currículo
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center p-2 text-foreground-text hover:text-muted-text"
          aria-label="Email"
        >
          <Mail className="size-5" />
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 text-foreground-text hover:text-muted-text"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 text-foreground-text hover:text-muted-text"
          aria-label="GitHub"
        >
          <GithubIcon className="size-5" />
        </a>
      </div>
    </header>
  )
}
