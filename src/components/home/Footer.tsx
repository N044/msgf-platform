import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const footerLinks = ["Privacy", "Terms", "Instagram", "YouTube", "LinkedIn"];

export function Footer() {
  return (
    <Section as="footer" className="bg-slate-950 text-white">
      <Container>
        <div className="space-y-16">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Universitas Mikroskil
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Office of Student Affairs (OSA)
              </p>
              <p className="text-base leading-7 text-slate-300 sm:text-lg">
                Jl. M.H. Thamrin No.140
                <br />
                Medan, North Sumatra, Indonesia
              </p>
            </div>

            <Button className="bg-white px-6 text-slate-950 hover:bg-[#E78938] hover:text-white">
              Contact Us
            </Button>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col gap-6 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
              <p>© 2026 Universitas Mikroskil. All Rights Reserved </p>
              <nav aria-label="Footer links">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end">
                  {footerLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
