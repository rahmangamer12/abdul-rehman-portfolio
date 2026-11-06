import type { AiRole } from "@/lib/data";
import { Reveal } from "./ui";

export function AiBadge({ ai, className = "" }: { ai: AiRole; className?: string }) {
  const worker = ai.kind === "worker";
  return (
    <span
      title={ai.job}
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] font-semibold ${
        worker ? "border-accent/50 bg-accent text-accent-ink" : "border-violet/40 bg-violet/15 text-ink"
      } ${className}`}
    >
      {worker ? "AI worker" : "AI agent"}
    </span>
  );
}

const rows: [string, string, string][] = [
  ["Starts", "When you ask", "On its own, on a schedule or trigger"],
  ["Scope", "One task", "One whole job, every day"],
  ["Rules", "Your prompt", "Written rules it always follows"],
  ["Risky steps", "You check the answer", "Waits for a person to approve"],
];

export function AgentsVsWorkers({ id = "ai-workers" }: { id?: string }) {
  return (
    <section className="border-t border-line py-24 sm:py-32" aria-labelledby={`${id}-title`} id={id}>
      <div className="container-x">
        <Reveal className="mb-12 max-w-3xl sm:mb-16">
          <h2 id={`${id}-title`} className="border-t border-line pt-6 text-[clamp(2.3rem,5.8vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
            Agents answer. <span className="block">Workers do the job.</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="card h-full p-7 sm:p-9">
              <span className="inline-flex items-center rounded-full border border-violet/40 bg-violet/15 px-3 py-1 text-xs font-semibold">
                AI agent
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">Does a task when you ask.</h3>
              <p className="mt-3 leading-relaxed text-muted">
                You open it, give it a task, and it does that task: write a reply, turn a voice note into a report, answer a question.
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <div className="card border-grad h-full p-7 sm:p-9">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                AI worker
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">Owns one job and does it every day.</h3>
              <p className="mt-3 leading-relaxed text-muted">
                It runs on its own, follows your rules, and stops for a person to approve anything risky. Under the hood, a worker is
                built from agents.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5">
          <div className="card overflow-hidden">
            <table className="w-full text-left text-[15px]">
              <caption className="border-b border-line px-5 py-4 text-left text-base font-semibold sm:px-8">AI agents vs AI workers</caption>
              <thead>
                <tr className="border-b border-line text-sm text-muted">
                  <th scope="col" className="w-[26%] px-5 py-4 font-medium sm:px-8" />
                  <th scope="col" className="px-3 py-4 font-medium">AI agent</th>
                  <th scope="col" className="px-3 py-4 font-medium text-accent sm:pr-8">AI worker</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([k, a, w]) => (
                  <tr key={k} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 text-sm font-medium text-muted sm:px-8">
                      {k}
                    </th>
                    <td className="px-3 py-4">{a}</td>
                    <td className="px-3 py-4 font-medium sm:pr-8">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-5">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent-soft p-7 sm:p-9">
            <p className="text-xl leading-snug font-medium sm:text-2xl">
              <strong className="font-semibold text-accent">The simple test.</strong> If you have to open a chat and ask every time, it&apos;s an
              agent. If the work gets done while you sleep, it&apos;s a worker.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
