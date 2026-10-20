import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Section } from '@/ui/Section';
import { LinkButton } from '@/ui/Button';

export function NotFound() {
  return (
    <Section className="min-h-[60vh]">
      <div className="mx-auto max-w-lg text-center">
        <Compass size={40} className="mx-auto text-accent" aria-hidden />
        <h1 className="mt-6 font-display text-4xl font-semibold text-ink">Página não encontrada</h1>
        <p className="mt-3 text-ink-soft">
          O endereço não existe. Mas o caminho para as aulas está logo ali.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton to="/aulas">Ver as 8 aulas</LinkButton>
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-line-strong px-5 py-3 text-sm font-bold text-ink hover:border-ink"
          >
            Página inicial
          </Link>
        </div>
      </div>
    </Section>
  );
}