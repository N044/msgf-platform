import { GovernanceRelationship } from "@/components/governance/GovernanceRelationship";

import type { GovernanceSupportContent } from "@/content/governance-structure";

interface GovernanceSupportProps {
  content: GovernanceSupportContent;
}

const cardClasses = {
  advisory: "border-emerald-100 bg-emerald-50/50",
  coaching: "border-sky-100 bg-sky-50/50",
};

export function GovernanceSupport({ content }: GovernanceSupportProps) {
  return (
    <div>
      <div className="pb-6">
        <GovernanceRelationship type="advisory" label={content.connectionLabel} />
      </div>

      <section
        aria-labelledby="governance-support-title"
        className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_80px_-58px_rgba(10,23,55,0.55)] sm:p-6 lg:p-8"
      >
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {content.eyebrow}
          </p>
          <h3
            id="governance-support-title"
            className="text-2xl font-semibold tracking-tight text-[#0A1737] sm:text-3xl"
          >
            {content.title}
          </h3>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">{content.description}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[1.5rem] border p-5 sm:p-6 ${cardClasses[card.relationship]}`}
            >
              <h4 className="text-xl font-semibold tracking-tight text-[#0A1737]">{card.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>

              {card.appointedBy ? (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Appointed by {card.appointedBy}
                </p>
              ) : null}

            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <span aria-hidden="true" className="w-9 border-t-2 border-solid border-[#0A1737]/35" />
              Authority / appointment
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <span aria-hidden="true" className="w-9 border-t-2 border-dashed border-emerald-500/70" />
              Advisory
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <span aria-hidden="true" className="w-9 border-t-2 border-dashed border-sky-500/70" />
              Coaching
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
