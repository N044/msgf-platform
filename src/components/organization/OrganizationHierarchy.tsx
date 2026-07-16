interface OrganizationHierarchyProps {
  eyebrow: string;
  title: string;
  president: string;
  vicePresident: string;
  officers: string[];
  ministryLabel: string;
  ministryDescription: string;
}

function HierarchyArrow() {
  return <span aria-hidden="true" className="my-4 block text-center text-2xl text-[#B66B2A]">↓</span>;
}

export function OrganizationHierarchy({ eyebrow, title, president, vicePresident, officers, ministryLabel, ministryDescription }: OrganizationHierarchyProps) {
  return (
    <section id="organization-structure" aria-labelledby="organization-structure-title">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="organization-structure-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-[#E6D7C5] bg-white p-6 shadow-[0_24px_70px_-52px_rgba(10,23,55,0.6)] sm:p-10">
        <div className="mx-auto max-w-xs rounded-2xl bg-[#0A1737] px-6 py-5 text-center text-lg font-semibold text-white">{president}</div>
        <HierarchyArrow />
        <div className="mx-auto max-w-xs rounded-2xl border border-[#D8C4AB] bg-[#FFF7EC] px-6 py-5 text-center text-lg font-semibold text-[#0A1737]">{vicePresident}</div>
        <HierarchyArrow />
        <div className="grid gap-4 sm:grid-cols-2">{officers.map((officer) => <div key={officer} className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-center font-semibold text-[#0A1737]">{officer}</div>)}</div>
        <HierarchyArrow />
        <div className="rounded-2xl border border-dashed border-[#CDB394] bg-[#F8F4EC] px-6 py-5 text-center"><p className="font-semibold text-[#0A1737]">{ministryLabel}</p><p className="mt-1 text-sm text-slate-600">{ministryDescription}</p></div>
      </div>
    </section>
  );
}
