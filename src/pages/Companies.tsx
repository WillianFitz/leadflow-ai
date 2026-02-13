import { Building2, MoreHorizontal, Users, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Company {
  id: number;
  name: string;
  cnpj: string;
  plan: string;
  status: "Ativo" | "Inativo" | "Trial";
  users: number;
  leads: number;
  revenue: string;
}

const companies: Company[] = [
  { id: 1, name: "TechCorp Solutions", cnpj: "12.345.678/0001-01", plan: "Profissional", status: "Ativo", users: 8, leads: 342, revenue: "R$ 89.000" },
  { id: 2, name: "StartUp X Digital", cnpj: "23.456.789/0001-02", plan: "Enterprise", status: "Ativo", users: 15, leads: 891, revenue: "R$ 245.000" },
  { id: 3, name: "MegaStore LTDA", cnpj: "34.567.890/0001-03", plan: "Básico", status: "Trial", users: 3, leads: 56, revenue: "R$ 12.000" },
  { id: 4, name: "InfoTech Systems", cnpj: "45.678.901/0001-04", plan: "Profissional", status: "Ativo", users: 6, leads: 215, revenue: "R$ 67.500" },
  { id: 5, name: "CloudSys Platform", cnpj: "56.789.012/0001-05", plan: "Básico", status: "Inativo", users: 2, leads: 88, revenue: "R$ 0" },
];

const planColors: Record<string, string> = {
  Básico: "bg-muted text-muted-foreground",
  Profissional: "bg-primary/15 text-primary",
  Enterprise: "bg-accent/15 text-accent",
};

const statusColors: Record<string, string> = {
  Ativo: "bg-success/15 text-success",
  Inativo: "bg-destructive/15 text-destructive",
  Trial: "bg-warning/15 text-warning",
};

const Companies = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Empresas</h1>
        <p className="text-sm text-muted-foreground">Gestão de clientes e assinaturas</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {companies.map((company, i) => (
          <div
            key={company.id}
            className="rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover animate-fade-in cursor-pointer"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{company.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{company.cnpj}</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", planColors[company.plan])}>
                {company.plan}
              </span>
              <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", statusColors[company.status])}>
                {company.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-border pt-4">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{company.users} users</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{company.leads} leads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{company.revenue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
