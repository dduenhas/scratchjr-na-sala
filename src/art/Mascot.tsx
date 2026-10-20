interface MascotProps {
  color?: string;
  accent?: string;
  className?: string;
  title?: string;
}

/** Personagem original do projeto (não é o gato do Scratch, para evitar confusão). */
export function Mascot({
  color = '#0e7c66',
  accent = '#f2c200',
  className,
  title = 'Personagem',
}: MascotProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label={title}>
      <ellipse cx="48" cy="90" rx="24" ry="4" fill="rgba(0,0,0,0.12)" />
      <line x1="48" y1="28" x2="48" y2="14" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="12" r="6" fill={accent} />
      <rect x="16" y="26" width="64" height="60" rx="22" fill={color} />
      <rect x="24" y="20" width="16" height="14" rx="7" fill={color} />
      <rect x="56" y="20" width="16" height="14" rx="7" fill={color} />
      <ellipse cx="37" cy="54" rx="8.5" ry="9" fill="#ffffff" />
      <ellipse cx="59" cy="54" rx="8.5" ry="9" fill="#ffffff" />
      <circle cx="38.5" cy="55" r="3.6" fill="#14161b" />
      <circle cx="60.5" cy="55" r="3.6" fill="#14161b" />
      <circle cx="40" cy="53.5" r="1.2" fill="#ffffff" />
      <circle cx="62" cy="53.5" r="1.2" fill="#ffffff" />
      <circle cx="28" cy="66" r="4" fill="#ff8fa3" opacity="0.7" />
      <circle cx="68" cy="66" r="4" fill="#ff8fa3" opacity="0.7" />
      <path d="M40 68q8 7 16 0" stroke="#14161b" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}