import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { categoriaById, blocoById } from '@/content/blocos';
import type { Lesson } from '@/content/lessons';

export function LessonCard({ lesson, className }: { lesson: Lesson; className?: string }) {
  const cats = Array.from(new Set(lesson.blocos.map((id) => blocoById[id]?.categoria))).filter(
    Boolean,
  ) as (keyof typeof categoriaById)[];

  return (
    <Link
      to={`/aulas/${lesson.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift',
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="font-display text-5xl font-semibold leading-none text-line-strong transition-colors duration-300 group-hover:text-accent">
          {String(lesson.n).padStart(2, '0')}
        </span>
        <ArrowUpRight
          size={20}
          className="mt-1 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
      <h3 className="text-balance font-display text-xl font-semibold text-ink">{lesson.title}</h3>
      <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-ink-soft">
        {lesson.tagline}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-[11px] font-bold uppercase tracking-wide text-ink-mute">
          {lesson.anoTags.join(' · ')}
        </span>
        <span className="flex items-center gap-1.5">
          {cats.map((c) => (
            <span
              key={c}
              title={categoriaById[c].nome}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: categoriaById[c].hex }}
            />
          ))}
        </span>
      </div>
    </Link>
  );
}