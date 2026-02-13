const recentLeads = [
  { name: "Carlos Silva", company: "TechCorp", status: "Novo", source: "Google Ads", time: "Há 5 min" },
  { name: "Ana Beatriz", company: "StartUp X", status: "Contato", source: "Facebook", time: "Há 12 min" },
  { name: "João Pedro", company: "MegaStore", status: "Proposta", source: "Instagram", time: "Há 30 min" },
  { name: "Maria Clara", company: "InfoTech", status: "Contato", source: "Google Ads", time: "Há 1h" },
  { name: "Rafael Souza", company: "DigitalCo", status: "Novo", source: "Orgânico", time: "Há 2h" },
];

const statusColors: Record<string, string> = {
  Novo: "bg-primary/15 text-primary",
  Contato: "bg-accent/15 text-accent",
  Proposta: "bg-chart-3/15 text-chart-3",
  Fechado: "bg-success/15 text-success",
  Perdido: "bg-destructive/15 text-destructive",
};

export function RecentLeads() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in">
      <h3 className="text-base font-semibold text-card-foreground">Leads Recentes</h3>
      <p className="text-sm text-muted-foreground mb-4">Últimos leads capturados</p>
      <div className="space-y-3">
        {recentLeads.map((lead, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {lead.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.company} · {lead.source}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[lead.status]}`}>
                {lead.status}
              </span>
              <span className="text-xs text-muted-foreground">{lead.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
