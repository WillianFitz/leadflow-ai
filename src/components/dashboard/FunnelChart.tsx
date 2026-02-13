import { cn } from "@/lib/utils";

interface FunnelStage {
  label: string;
  count: number;
  color: string;
}

const stages: FunnelStage[] = [
  { label: "Novos", count: 248, color: "bg-chart-1" },
  { label: "Contato", count: 186, color: "bg-chart-2" },
  { label: "Proposta", count: 94, color: "bg-chart-3" },
  { label: "Negociação", count: 52, color: "bg-chart-4" },
  { label: "Fechado", count: 31, color: "bg-success" },
];

const maxCount = 248;

export function FunnelChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card">
      <h3 className="text-base font-semibold text-card-foreground">Funil de Vendas</h3>
      <p className="text-sm text-muted-foreground mb-6">Distribuição dos leads por etapa</p>
      <div className="space-y-4">
        {stages.map((stage, i) => {
          const width = Math.max((stage.count / maxCount) * 100, 15);
          return (
            <div key={stage.label} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-card-foreground">{stage.label}</span>
                <span className="text-sm font-bold text-card-foreground">{stage.count}</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-700", stage.color)}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
