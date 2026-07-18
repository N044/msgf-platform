interface FaqItem { id: string; question: string; answer: string; }
interface ResourcesFaqProps { eyebrow: string; title: string; faqs: FaqItem[]; }

export function ResourcesFaq({ eyebrow, title, faqs }: ResourcesFaqProps) {
  return <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div className="space-y-3"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2></div><div className="divide-y divide-[#D8C4AB] border-y border-[#D8C4AB]">{faqs.map((faq) => <details key={faq.id} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#0A1737] marker:content-none">{faq.question}<span aria-hidden="true" className="float-right text-[#B66B2A] group-open:hidden">+</span><span aria-hidden="true" className="float-right text-[#B66B2A] group-open:inline hidden">−</span></summary><p className="mt-3 max-w-2xl leading-7 text-slate-700">{faq.answer}</p></details>)}</div></div>;
}
