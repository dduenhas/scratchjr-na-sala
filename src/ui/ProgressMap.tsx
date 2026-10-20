import { lessons } from '@/content/lessons';
import { LessonCard } from './LessonCard';
import { Reveal } from './Reveal';
import { cn } from '@/lib/cn';

export function ProgressMap({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {lessons.map((l, i) => (
        <Reveal key={l.slug} delay={i * 0.05}>
          <LessonCard lesson={l} className="h-full" />
        </Reveal>
      ))}
    </div>
  );
}