interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/40 via-background to-background pt-20 pb-16 md:pt-28 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-72 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--color-primary-soft) 0%, transparent 70%)",
        }}
      />
      <div className="container-narrow text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
