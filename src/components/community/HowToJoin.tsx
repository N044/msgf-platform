import type { JoinStep } from "@/content/student-communities";

interface HowToJoinProps {
  eyebrow: string;
  title: string;
  steps: JoinStep[];
}

export function HowToJoin({ eyebrow, title, steps }: HowToJoinProps) {
  return (
    <section aria-labelledby="how-to-join-title">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="how-to-join-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <ol className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.id} className="relative rounded-2xl border border-[#E6D7C5] bg-white p-6 text-center shadow-sm">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1737] text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-lg font-semibold text-[#0A1737]">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            {index < steps.length - 1 ? <span aria-hidden="true" className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-2xl text-[#B66B2A] lg:block">→</span> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
