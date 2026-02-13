import { Users, Mail, Shield, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  leads: number;
  conversions: number;
  status: "Online" | "Offline";
}

const team: TeamMember[] = [
  { id: 1, name: "Ana Oliveira", email: "ana@leadpulse.io", role: "Gerente Comercial", leads: 89, conversions: 18, status: "Online" },
  { id: 2, name: "Carlos Mendes", email: "carlos@leadpulse.io", role: "Vendedor Senior", leads: 67, conversions: 14, status: "Online" },
  { id: 3, name: "Maria Costa", email: "maria@leadpulse.io", role: "Vendedora", leads: 54, conversions: 12, status: "Offline" },
  { id: 4, name: "João Santos", email: "joao@leadpulse.io", role: "Vendedor", leads: 42, conversions: 10, status: "Online" },
  { id: 5, name: "Rafael Lima", email: "rafael@leadpulse.io", role: "Vendedor Junior", leads: 31, conversions: 8, status: "Offline" },
];

const Team = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Equipe</h1>
        <p className="text-sm text-muted-foreground">Gerencie membros e permissões</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={member.id}
            className="rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className={cn(
                    "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card",
                    member.status === "Online" ? "bg-success" : "bg-muted-foreground"
                  )} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Mail className="h-3.5 w-3.5" />
              {member.email}
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
              <div className="text-center">
                <p className="text-lg font-bold text-card-foreground">{member.leads}</p>
                <p className="text-xs text-muted-foreground">Leads</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-success">{member.conversions}</p>
                <p className="text-xs text-muted-foreground">Conversões</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
