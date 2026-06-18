import { officialSocialProfiles } from "@/content/site";

type SocialLinksProps = {
  compact?: boolean;
};

function SocialMark({ label }: { label: string }) {
  return (
    <svg
      aria-hidden="true"
      className="social-link__mark"
      focusable="false"
      viewBox="0 0 40 40"
    >
      <rect width="40" height="40" rx="8" />
      <text x="20" y="25" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <ul className={compact ? "social-links social-links--compact" : "social-links"}>
      {officialSocialProfiles.map((profile) => (
        <li key={profile.key}>
          <a
            aria-label={`Abrir ${profile.label} oficial da Marcus Reboque em nova aba`}
            href={profile.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialMark label={profile.shortLabel} />
            <span>{profile.label}</span>
            <small>externo</small>
          </a>
        </li>
      ))}
    </ul>
  );
}
