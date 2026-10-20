import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ImageFigureProps {
  src: string;
  alt: string;
  legenda?: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  priority?: boolean;
}

/**
 * Exibe uma imagem oficial (hotlink) com fallback elegante caso o recurso
 * não esteja acessível offline. Sempre com legenda e lazy loading.
 */
export function ImageFigure({
  src,
  alt,
  legenda,
  className,
  imgClassName,
  aspect = 'aspect-video',
  priority = false,
}: ImageFigureProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        'print-break overflow-hidden rounded-card border border-line bg-surface shadow-soft',
        className,
      )}
    >
      <div className={cn('relative w-full overflow-hidden bg-paper-deep', aspect)}>
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
            <ImageOff size={26} className="text-ink-mute" aria-hidden />
            <p className="max-w-xs text-sm font-semibold text-ink-soft">{alt}</p>
            <p className="text-xs text-ink-mute">Imagem oficial exibida via scratchjr.org</p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={cn('h-full w-full object-contain', imgClassName)}
          />
        )}
      </div>
      {legenda && (
        <figcaption className="border-t border-line px-4 py-2.5 text-xs font-semibold text-ink-mute">
          {legenda}
        </figcaption>
      )}
    </figure>
  );
}