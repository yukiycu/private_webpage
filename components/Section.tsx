import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.6fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
