import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Mascot } from './Mascot';

export type CenaId = 'sky' | 'grass' | 'night' | 'sunset' | 'space' | 'plain';

const cenas: Record<CenaId, ReactNode> = {
  sky: (
    <>
      <defs>
        <linearGradient id="sj-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9ecff" />
          <stop offset="100%" stopColor="#bfe0ff" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill="url(#sj-sky)" />
      <circle cx="168" cy="26" r="14" fill="#ffd764" />
      <g fill="#ffffff" opacity="0.9">
        <ellipse cx="48" cy="30" rx="18" ry="8" />
        <ellipse cx="62" cy="30" rx="12" ry="7" />
        <ellipse cx="120" cy="56" rx="14" ry="6" />
      </g>
      <rect y="126" width="200" height="24" fill="#8fd48a" />
    </>
  ),
  grass: (
    <>
      <rect width="200" height="150" fill="#cdeccb" />
      <circle cx="30" cy="26" r="12" fill="#ffd764" />
      <rect y="110" width="200" height="40" fill="#79c774" />
      <rect y="110" width="200" height="6" fill="#5fb45c" />
    </>
  ),
  night: (
    <>
      <rect width="200" height="150" fill="#1d2447" />
      <circle cx="160" cy="30" r="12" fill="#f4ecd0" />
      <g fill="#ffffff" opacity="0.85">
        <circle cx="30" cy="24" r="1.6" />
        <circle cx="70" cy="40" r="1.2" />
        <circle cx="110" cy="20" r="1.6" />
        <circle cx="50" cy="60" r="1.2" />
        <circle cx="140" cy="66" r="1.4" />
      </g>
      <rect y="120" width="200" height="30" fill="#2b3160" />
    </>
  ),
  sunset: (
    <>
      <defs>
        <linearGradient id="sj-sunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd9a0" />
          <stop offset="100%" stopColor="#ff9e6d" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill="url(#sj-sunset)" />
      <circle cx="100" cy="104" r="22" fill="#ff7043" />
      <rect y="120" width="200" height="30" fill="#c05a3a" />
    </>
  ),
  space: (
    <>
      <rect width="200" height="150" fill="#0d1230" />
      <g fill="#ffffff">
        <circle cx="24" cy="30" r="1.6" />
        <circle cx="60" cy="18" r="1.1" />
        <circle cx="96" cy="44" r="1.5" />
        <circle cx="140" cy="26" r="1.2" />
        <circle cx="176" cy="60" r="1.6" />
        <circle cx="46" cy="86" r="1.3" />
        <circle cx="120" cy="96" r="1.1" />
      </g>
      <circle cx="150" cy="46" r="9" fill="#a8b0ff" opacity="0.9" />
    </>
  ),
  plain: <rect width="200" height="150" fill="#f2f2ec" />,
};

interface StageProps {
  cena?: CenaId;
  children?: ReactNode;
  className?: string;
  /** Botões de controle decorativos no topo do palco. */
  chrome?: boolean;
  label?: string;
}

/** Palco do ScratchJr recriado em SVG, com presets de cenário. */
export function Stage({ cena = 'sky', children, className, chrome = true, label }: StageProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl border border-line-strong bg-surface shadow-soft',
        className,
      )}
    >
      {chrome && (
        <div className="flex items-center gap-1.5 border-b border-line bg-paper-deep/80 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-block-end/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-block-trigger/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-block-sound/70" />
          {label && (
            <span className="ml-2 truncate text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
              {label}
            </span>
          )}
        </div>
      )}
      <div className="relative aspect-[4/3] w-full">
        <svg
          viewBox="0 0 200 150"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {cenas[cena]}
        </svg>
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  );
}

interface SpriteProps {
  x: number;
  y: number;
  rotation?: number;
  scale?: number;
  visible?: boolean;
  color?: string;
  accent?: string;
  transitionMs?: number;
  className?: string;
  say?: string | null;
}

/** Personagem posicionado no palco, animado por transições CSS. */
export function Sprite({
  x,
  y,
  rotation = 0,
  scale = 1,
  visible = true,
  color,
  accent,
  transitionMs = 450,
  className,
  say = null,
}: SpriteProps) {
  return (
    <div
      className={cn('absolute h-[22%] w-[22%]', className)}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        transition: `left ${transitionMs}ms cubic-bezier(0.34,1.2,0.64,1), top ${transitionMs}ms cubic-bezier(0.34,1.2,0.64,1), transform ${transitionMs}ms cubic-bezier(0.34,1.2,0.64,1), opacity 240ms ease`,
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
      }}
    >
      <Mascot color={color} accent={accent} className="h-full w-full drop-shadow-sm" />
      {say && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-xl border border-line bg-white px-2.5 py-1 text-xs font-bold text-ink shadow-soft after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-white">
          {say}
        </span>
      )}
    </div>
  );
}