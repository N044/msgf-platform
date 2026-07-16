import { Button } from "@/components/ui/Button";
import type { StudentOrganization } from "@/content/student-communities";

interface OrganizationCardProps {
  organization: StudentOrganization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E6D7C5] bg-white p-6 shadow-[0_24px_70px_-52px_rgba(10,23,55,0.6)]">
      <span className="w-fit rounded-full border border-[#E8C9A8] bg-[#FFF7EC] px-3 py-1 text-xs font-semibold text-[#B66B2A]">{organization.category}</span>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0A1737]">{organization.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{organization.description}</p>
      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
        <div><dt className="sr-only">Members</dt><dd>{organization.memberCount}</dd></div>
        <div><dt className="sr-only">Founded</dt><dd>{organization.foundedYear}</dd></div>
      </dl>
      <Button variant="secondary" size="sm" className="mt-6 w-full">{organization.exploreLabel}</Button>
    </article>
  );
}
