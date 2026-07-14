import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
  ariaLabel?: string;
  className?: string;
}

export function BackButton({
  href,
  label,
  ariaLabel,
  className = "",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className={`group inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-slate-400 transition duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="transition duration-200 group-hover:-translate-x-0.5"
      >
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
