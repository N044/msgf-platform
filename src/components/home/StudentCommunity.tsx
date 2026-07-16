import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface CommunitySlide {
  id: string;
  title: string;
  badge?: string;
  description: string;
  pattern: "union" | "clubs" | "society";
  href?: string;
}

const communitySlides: CommunitySlide[] = [
  {
    id: "students-union",
    title: "Students' Union",
    description: "🏛️ Lead. Represent. Inspire.",
    pattern: "union",
    href: "/student-communities/students-union",
  },
  {
    id: "students-clubs",
    title: "Students' Clubs",
    badge: "+13 Active Clubs",
    description: "Sports, technology, business & finance, arts and creativity.",
    pattern: "clubs",
  },
  {
    id: "students-society",
    title: "Students' Society",
    badge: "+4 Active Societies",
    description: "Religion communities and social impact that support learning beyond the classroom.",
    pattern: "society",
  },
];

function CommunityPattern({ pattern }: { pattern: CommunitySlide["pattern"] }) {
  if (pattern === "union") {
    return (
      <>
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-[#0A1737]/10" />
        <div className="absolute right-16 top-16 h-12 w-12 rounded-full border border-[#E78938]/40" />
        <div className="absolute bottom-12 left-10 h-px w-36 rotate-[-18deg] bg-[#0A1737]/10" />
        <div className="absolute bottom-20 left-28 h-3 w-3 rounded-full bg-[#E78938]/70" />
      </>
    );
  }

  if (pattern === "clubs") {
    return (
      <>
        <div className="absolute right-10 top-10 grid grid-cols-4 gap-3">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="h-2.5 w-2.5 rounded-full bg-[#0A1737]/10 odd:bg-[#E78938]/35"
            />
          ))}
        </div>
        <div className="absolute bottom-12 right-16 h-24 w-24 rounded-[2rem] border border-[#0A1737]/10" />
        <div className="absolute bottom-20 right-24 h-10 w-10 rounded-full bg-[#E78938]/10" />
      </>
    );
  }

  return (
    <>
      <div className="absolute right-8 top-12 h-20 w-40 rounded-full border border-[#0A1737]/10" />
      <div className="absolute right-20 top-24 h-20 w-40 rounded-full border border-[#E78938]/35" />
      <div className="absolute bottom-14 left-12 h-20 w-20 rotate-12 rounded-[1.5rem] border border-[#0A1737]/10" />
      <div className="absolute bottom-24 left-24 h-2 w-28 rotate-12 rounded-full bg-[#E78938]/40" />
    </>
  );
}

export function StudentCommunity() {
  return (
    <Section id="student-community" className="bg-[#F8F4EC] text-[#0A1737]">
      <Container>
        <div className="space-y-10">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore Student Communities
            </h2>
            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              Discover how students connect, lead, and grow through communities at Universitas Mikroskil.
            </p>
          </div>

          <div aria-label="Student community carousel" className="-mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[8%] pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 md:px-[12%] lg:gap-8 lg:px-[17%]">
              {communitySlides.map((slide) => (
                <article
                  id={slide.id}
                  key={slide.id}
                  className="group relative flex min-h-[390px] w-[84%] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-[#E6D7C5] bg-white/90 p-8 shadow-[0_28px_80px_-52px_rgba(10,23,55,0.65)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_34px_90px_-48px_rgba(10,23,55,0.75)] sm:min-h-[430px] sm:w-[76%] sm:p-10 md:w-[72%] lg:w-[66%] lg:p-12 xl:w-[62%]"
                >
                  <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <CommunityPattern pattern={slide.pattern} />
                  </div>

                  <div className="relative z-10 flex h-full max-w-xl flex-col justify-between gap-12">
                    <div className="space-y-6">
                      {slide.badge ? (
                        <div className="inline-flex rounded-full border border-[#E6D7C5] bg-[#F8F4EC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A1737]/70">
                          {slide.badge}
                        </div>
                      ) : null}

                      <div className="space-y-4">
                        <h3 className="text-4xl font-semibold tracking-tight text-[#0A1737] sm:text-5xl">
                          {slide.title}
                        </h3>
                        <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                          {slide.description}
                        </p>
                      </div>
                    </div>

                    {slide.href ? (
                      <Link
                        href={slide.href}
                        className="inline-flex w-fit items-center justify-center rounded-full bg-[#0A1737] px-5 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-[#E78938]"
                      >
                        Explore →
                      </Link>
                    ) : (
                      <Button className="w-fit !bg-[#0A1737] !px-5 text-white group-hover:!bg-[#E78938]">
                        Explore →
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2" aria-label="Carousel pages">
              {communitySlides.map((slide) => (
                <a
                  key={slide.id}
                  href={`#${slide.id}`}
                  className="h-2.5 w-2.5 rounded-full bg-[#0A1737]/20 transition duration-200 hover:bg-[#E78938] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F4EC]"
                >
                  <span className="sr-only">{slide.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
