import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { governanceOverviewCards } from "@/content/governance-overview";

export function GovernanceOverview() {
  return (
    <Section id="governance-overview" className="bg-white">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Explore the Building Blocks of Student Governance
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
             Everything about student governance, in one place.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {governanceOverviewCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group block rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl text-slate-700 transition group-hover:border-slate-300 group-hover:text-slate-950">
                  {card.icon}
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
