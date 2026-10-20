import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/cn';

const nav = [
  { to: '/aulas', label: 'As 8 aulas' },
  { to: '/bncc', label: 'BNCC Computação' },
  { to: '/guia', label: 'Guia do professor' },
  { to: '/glossario', label: 'Glossário' },
  { to: '/imprimiveis', label: 'Imprimíveis' },
  { to: '/recursos', label: 'Recursos' },
];

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden>
        <rect width="64" height="64" rx="14" fill="#101319" />
        <path
          d="M16 30h4a4 4 0 0 0 4-4v-2a5 5 0 0 1 10 0v2a4 4 0 0 0 4 4h2a5 5 0 0 1 0 10h-2a4 4 0 0 0-4 4v2a5 5 0 0 1-10 0v-2a4 4 0 0 0-4-4h-4a5 5 0 0 1 0-10Z"
          fill="#0e7c66"
        />
        <circle cx="40" cy="21" r="4.5" fill="#f2c200" />
        <rect x="14" y="42" width="11" height="11" rx="3" fill="#4c8bf5" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[17px] font-semibold tracking-tight text-ink">
          ScratchJr na Sala
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-mute">
          Guia do professor
        </span>
      </span>
    </span>
  );
}

function TopNav() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" aria-label="Página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3.5 py-2 text-sm font-bold transition-colors',
                  isActive ? 'bg-ink text-paper' : 'text-ink-soft hover:bg-paper-deep hover:text-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setAberto((a) => !a)}
          className="rounded-full border border-line-strong p-2 text-ink lg:hidden"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-line bg-paper px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3 py-2.5 text-sm font-bold',
                      isActive ? 'bg-ink text-paper' : 'text-ink-soft hover:bg-paper-deep',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="no-print border-t border-line bg-ink text-paper/85">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold text-paper">ScratchJr na Sala</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">
            Um plano de 8 aulas introdutórias de ScratchJr para o Ensino Fundamental I, escrito para
            o professor e alinhado à BNCC Computação. Foco em criatividade, animação e
            interatividade — sem som e sem câmera.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-paper/50">
            Navegar
          </p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-paper/50">
            Fontes oficiais
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.scratchjr.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-paper/80 hover:text-paper"
              >
                scratchjr.org <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/mec/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-paper/80 hover:text-paper"
              >
                BNCC Computação · MEC <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-5 py-5 sm:px-8">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-paper/50">
          Material pedagógico de apoio. ScratchJr é um projeto da Scratch Foundation; as imagens do
          aplicativo são exibidas a partir do site oficial scratchjr.org com fins educacionais. A
          BNCC Computação é um complemento à BNCC (Parecer CNE/CEB nº 2/2022; Resolução CNE/CEB nº
          1/2022).
        </p>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}