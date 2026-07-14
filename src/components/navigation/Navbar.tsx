import type { ReactNode } from "react";

interface NavbarProps {
  brand?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Navbar({ brand, children, className = "" }: NavbarProps) {
  return (
    <nav className={`border-b border-slate-200 bg-white/80 backdrop-blur ${className}`.trim()}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
          {brand ?? "MSGF"}
        </div>
        {children ? <div className="flex items-center gap-4">{children}</div> : null}
      </div>
    </nav>
  );
}
