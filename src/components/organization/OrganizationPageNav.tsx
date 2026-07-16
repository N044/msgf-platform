import type { OrganizationNavigationItem } from "@/content/students-union";

interface OrganizationPageNavProps {
  label: string;
  items: OrganizationNavigationItem[];
}

export function OrganizationPageNav({ label, items }: OrganizationPageNavProps) {
  return (
    <nav aria-label={label} className="border-y border-[#E6D7C5] bg-white">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6 lg:px-8">
        {items.map((item) => (
          <a key={item.id} href={item.href} className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-[#FFF7EC] hover:text-[#0A1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938]">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
