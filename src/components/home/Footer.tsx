import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Footer() {
  return (
    <Section
      as="footer"
      className="bg-[#050816] text-white relative overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a0f1a_0%,_#050816_70%)]" />

      <Container className="relative z-10">
        {/* ==== Brand ==== */}
        <div className="max-w-3xl mx-auto text-center space-y-8 py-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Universitas Mikroskil
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              OFFICE OF STUDENT AFFAIRS (OSA)
            </p>
            <p className="text-base leading-7 text-slate-300 sm:text-lg">
              Empowering students.<br />
              Building leaders.<br />
              Creating impact together.
            </p>
          </div>
        </div>

        {/* ==== Contact Row ==== */}
        <div className="flex flex-col md:flex-row items-center justify-center text-sm text-slate-400 space-y-2 md:space-y-0 md:space-x-6 mb-12">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Jl. M.H. Thamrin No.140, Medan, Indonesia</span>
          </div>
          <span className="hidden md:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span>✉</span>
            <a href="mailto:sa@mikroskil.ac.id" className="hover:text-slate-200 transition-colors">
              sa@mikroskil.ac.id
            </a>
          </div>
          <span className="hidden md:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span>☎</span>
            <a href="tel:+628123456789" className="hover:text-slate-200 transition-colors">
              +62 812-3456-789
            </a>
          </div>
        </div>

        {/* ==== Official Platform Banner ==== */}
        <div className="w-full max-w-3xl mx-auto bg-slate-900/50 border border-slate-700/50 rounded-full px-4 sm:px-8 py-6 flex flex-col items-center justify-center gap-4 mb-12 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-100 px-2">
            Official Student Governance Platform
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg px-4 sm:px-0">
            A centralized platform providing governance structures, annual journeys, organizational blueprints, policies, templates, and resources for Universitas Mikroskil student organizations.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            Start Exploring
            <span className="text-slate-400">→</span>
          </a>
        </div>

        {/* ==== Social Links ==== */}
        <div className="flex justify-center gap-6 mb-12 text-slate-400">
          {[
            { name: "Instagram", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "YouTube", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "TikTok", href: "#" },
            { name: "GitHub", href: "#" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </a>
          ))}
        </div>

        {/* ==== Footer Navigation ==== */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-8">
          {[
            "Home",
            "Governance Structure",
            "Governance Journey",
            "Student Communities",
            "Resources",
            "Policies",
            "Privacy",
            "Accessibility",
            "Terms",
          ].map((label) => (
            <a key={label} href="#" className="hover:text-slate-200 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* ==== Divider ==== */}
        <hr className="border-t border-slate-700/30 mb-8" />

        {/* ==== Bottom Section ==== */}
        <div className="text-center text-sm text-slate-400 space-y-1 pb-8">
          <p>© Universitas Mikroskil</p>
          <p>N044</p>
        </div>
      </Container>
    </Section>
  );
}
