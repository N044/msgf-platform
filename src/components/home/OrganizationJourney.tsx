import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface JourneyStep {
  number: string;
  title: string;
  icon: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Idea",
    icon: "💡",
    description: "Students identify a community need or shared interest.",
  },
  {
    number: "02",
    title: "Consultation",
    icon: "🤝",
    description: "Discuss the initiative with the Student Affairs Office.",
  },
  {
    number: "03",
    title: "Proposal Submission",
    icon: "📄",
    description: "Submit proposal, constitution (AD/ART), work plan, etc.",
  },
  {
    number: "04",
    title: "Review & Evaluation",
    icon: "🔍",
    description: "Administrative review, presentation, and evaluation process.",
  },
  {
    number: "05",
    title: "Approval",
    icon: "✅",
    description: "University grants official recognition.",
  },
  {
    number: "06",
    title: "Launch",
    icon: "🚀",
    description: "Organization officially begins operations and activities.",
  },
];

export function OrganizationJourney() {
  return (
    <Section id="organization-journey" className="overflow-hidden bg-[#F7F1E8]">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">
            Student Organization Journey
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            How a student initiative evolves into an officially recognized Students&apos; Club or
            Students&apos; Society at Universitas Mikroskil.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-5 top-6 h-[calc(100%-3rem)] w-px bg-[#E2CDB5] lg:left-[8.333%] lg:right-[8.333%] lg:top-8 lg:h-px lg:w-auto"
          />

          <ol className="relative grid gap-6 lg:grid-cols-6 lg:gap-4">
            {journeySteps.map((step) => (
              <li key={step.number} className="group relative pl-14 lg:pl-0 lg:pt-14">
                <div
                  aria-hidden="true"
                  className="absolute left-1 top-4 z-10 h-8 w-8 rounded-full border border-[#E2CDB5] bg-[#F7F1E8] shadow-sm transition duration-300 group-hover:border-[#E78938] group-hover:bg-white lg:left-1/2 lg:top-4 lg:-translate-x-1/2"
                >
                  <div className="m-2 h-3 w-3 rounded-full bg-[#0A1737] transition duration-300 group-hover:bg-[#E78938]" />
                </div>

                <article className="h-full rounded-[1.25rem] border border-[#E6D7C5] bg-white/85 p-5 shadow-[0_18px_45px_-34px_rgba(10,23,55,0.55)] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#E78938] group-hover:bg-white group-hover:shadow-[0_26px_60px_-32px_rgba(231,137,56,0.55)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold tracking-[0.25em] text-[#0A1737]/55 transition duration-300 group-hover:text-[#E78938]">
                      {step.number}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7F1E8] text-xl transition duration-300 group-hover:bg-[#E78938]/10">
                      {step.icon}
                    </span>
                  </div>

                  <div className="mt-8 space-y-3">
                    <h3 className="text-base font-semibold leading-6 text-[#0A1737]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-[1.5rem] border border-[#E6D7C5] bg-white/70 px-6 py-8 text-center shadow-[0_20px_60px_-45px_rgba(10,23,55,0.5)] sm:px-10">
          <h3 className="text-2xl font-semibold tracking-tight text-[#0A1737]">
            Ready to start your community?
          </h3>
          <div className="mt-6">
            <Button className="!bg-[#0A1737] !px-5 text-white hover:!bg-[#122653]">
              Explore →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
