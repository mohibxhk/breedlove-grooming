import { Reveal } from '@/components/site/reveal';

export function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        {eyebrow && (
          <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''} mb-5`}>
            <span className={`h-px w-10 ${light ? 'bg-brand-gold/60' : 'bg-brand-bronze'}`} />
            <span className={`uppercase tracking-[0.28em] text-xs font-medium ${light ? 'text-brand-gold' : 'text-brand-bronze'}`}>
              {eyebrow}
            </span>
            <span className={`h-px w-10 ${light ? 'bg-brand-gold/60' : 'bg-brand-bronze'}`} />
          </div>
        )}
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className={`font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] ${light ? 'text-white' : 'text-brand-charcoal'}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-white/75' : 'text-brand-slate'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
