import { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Filter, LayoutGrid, List, MoreHorizontal, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type LeadStatus = "Novo" | "Contato" | "Proposta" | "Negociação" | "Fechado" | "Perdido";

interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: LeadStatus;
  source: string;
  value: string;
  date: string;
}

const mockLeads: Lead[] = [
  { id: 1, name: "Carlos Silva", company: "TechCorp", email: "carlos@techcorp.com", phone: "(11) 99999-0001", status: "Novo", source: "Google Ads", value: "R$ 15.000", date: "13/02/2026" },
  { id: 2, name: "Ana Beatriz", company: "StartUp X", email: "ana@startupx.com", phone: "(21) 99999-0002", status: "Contato", source: "Facebook", value: "R$ 8.500", date: "12/02/2026" },
  { id: 3, name: "João Pedro", company: "MegaStore", email: "joao@megastore.com", phone: "(31) 99999-0003", status: "Proposta", source: "Instagram", value: "R$ 32.000", date: "11/02/2026" },
  { id: 4, name: "Maria Clara", company: "InfoTech", email: "maria@infotech.com", phone: "(11) 99999-0004", status: "Negociação", source: "Google Ads", value: "R$ 22.000", date: "10/02/2026" },
  { id: 5, name: "Rafael Souza", company: "DigitalCo", email: "rafael@digitalco.com", phone: "(41) 99999-0005", status: "Fechado", source: "Orgânico", value: "R$ 45.000", date: "09/02/2026" },
  { id: 6, name: "Fernanda Lima", company: "CloudSys", email: "fernanda@cloudsys.com", phone: "(51) 99999-0006", status: "Novo", source: "LinkedIn", value: "R$ 12.000", date: "08/02/2026" },
  { id: 7, name: "Lucas Martins", company: "AppDev", email: "lucas@appdev.com", phone: "(61) 99999-0007", status: "Contato", source: "Referência", value: "R$ 19.500", date: "07/02/2026" },
  { id: 8, name: "Isabela Santos", company: "DataFlow", email: "isabela@dataflow.com", phone: "(71) 99999-0008", status: "Perdido", source: "Google Ads", value: "R$ 28.000", date: "06/02/2026" },
];

const statusColors: Record<LeadStatus, string> = {
  Novo: "bg-primary/15 text-primary",
  Contato: "bg-accent/15 text-accent",
  Proposta: "bg-chart-3/15 text-chart-3",
  Negociação: "bg-warning/15 text-warning",
  Fechado: "bg-success/15 text-success",
  Perdido: "bg-destructive/15 text-destructive",
};

const kanbanColumns: LeadStatus[] = ["Novo", "Contato", "Proposta", "Negociação", "Fechado"];

const Leads = () => {
  const [view, setView] = useState<"kanban" | "table">("kanban");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Leads</h1>
          <p className="text-sm text-muted-foreground">{mockLeads.length} leads no total</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-border bg-muted/50 p-0.5">
            <button
              onClick={() => setView("kanban")}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
                view === "kanban" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
              Kanban
            </button>
            <button
              onClick={() => setView("table")}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
                view === "table" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <List className="h-4 w-4" />
              Tabela
            </button>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
          <Button size="sm" className="gradient-primary border-0 text-primary-foreground gap-2">
            <Plus className="h-4 w-4" />
            Novo Lead
          </Button>
        </div>
      </div>

      {view === "kanban" ? (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
          {kanbanColumns.map((status) => {
            const leads = mockLeads.filter((l) => l.status === status);
            return (
              <div key={status} className="flex w-72 shrink-0 flex-col rounded-xl border border-border bg-muted/30 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", statusColors[status])}>
                      {status}
                    </span>
                    <span className="text-xs text-muted-foreground">{leads.length}</span>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="rounded-lg border border-border bg-card p-3.5 shadow-card transition-all duration-200 hover:shadow-card-hover cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm font-semibold text-card-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.company}</p>
                        </div>
                        <span className="text-xs font-bold text-primary">{lead.value}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded bg-muted px-1.5 py-0.5">{lead.source}</span>
                        <span>{lead.date}</span>
                      </div>
                      <div className="mt-3 flex gap-2 border-t border-border pt-2">
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="h-3 w-3" /> Ligar
                        </button>
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="h-3 w-3" /> Email
                        </button>
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Calendar className="h-3 w-3" /> Agendar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nome</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Empresa</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Origem</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Valor</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data</th>
              </tr>
            </thead>
            <tbody>
              {mockLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-card-foreground">{lead.company}</td>
                  <td className="px-4 py-3">
                    <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", statusColors[lead.status])}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{lead.source}</td>
                  <td className="px-4 py-3 text-sm font-medium text-card-foreground">{lead.value}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leads;
