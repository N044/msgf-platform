"use client";

import type { ResourceTask, ResourceTaskId } from "@/content/resources";

interface TaskBrowserProps {
  eyebrow: string;
  title: string;
  description: string;
  allTasksLabel: string;
  tasks: ResourceTask[];
  selectedTaskId: ResourceTaskId | null;
  onTaskChange: (taskId: ResourceTaskId | null) => void;
}

export function TaskBrowser({
  eyebrow,
  title,
  description,
  allTasksLabel,
  tasks,
  selectedTaskId,
  onTaskChange,
}: TaskBrowserProps) {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-slate-700 sm:text-lg">{description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <button type="button" onClick={() => onTaskChange(null)} aria-pressed={selectedTaskId === null} className={`rounded-2xl border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1737] ${selectedTaskId === null ? "border-[#0A1737] bg-[#0A1737] text-white" : "border-[#E6D7C5] bg-white text-[#0A1737] hover:border-[#B66B2A]"}`}>
          <span className="text-sm font-semibold uppercase tracking-[0.15em]">00</span>
          <span className="mt-5 block text-lg font-semibold">{allTasksLabel}</span>
        </button>
        {tasks.map((task) => {
          const isSelected = selectedTaskId === task.id;
          return (
            <button key={task.id} type="button" onClick={() => onTaskChange(task.id)} aria-pressed={isSelected} className={`rounded-2xl border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1737] ${isSelected ? "border-[#0A1737] bg-[#0A1737] text-white" : "border-[#E6D7C5] bg-white text-[#0A1737] hover:border-[#B66B2A]"}`}>
              <span className="text-sm font-semibold uppercase tracking-[0.15em]">{task.icon}</span>
              <span className="mt-5 block text-lg font-semibold">{task.title}</span>
              <span className={`mt-1 block text-sm ${isSelected ? "text-slate-200" : "text-slate-700"}`}>{task.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
