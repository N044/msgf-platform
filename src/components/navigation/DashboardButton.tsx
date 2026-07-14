const DASHBOARD_URL = "https://mmsa-mikroskil.streamlit.app/";

export function DashboardButton() {
  return (
    <a
      href={DASHBOARD_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Student Governance Dashboard"
      className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-white shadow-[0_16px_40px_-28px_rgba(255,255,255,0.45)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-emerald-400 opacity-40" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span>Dashboard</span>
      <span
        aria-hidden="true"
        className="transition duration-300 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}
