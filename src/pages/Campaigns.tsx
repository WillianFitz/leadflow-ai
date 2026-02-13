import { cn } from "@/lib/utils";
import { Megaphone, TrendingUp, TrendingDown, Eye, MousePointer, DollarSign } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Campaign {
  id: number;
  name: string;
  platform: string;
  status: "Ativa" | "Pausada" | "Finalizada";
  spend: string;
  leads: number;
  cpl: string;
  ctr: string;
  conversions: number;
}

const campaigns: Campaign[] = [
  { id: 1, name: "Campanha Verão 2026", platform: "Google Ads", status: "Ativa", spend: "R$ 12.500", leads: 186, cpl: "R$ 67,20", ctr: "3.2%", conversions: 28 },
  { id: 2, name: "Black Friday Leads", platform: "Facebook", status: "Ativa", spend: "R$ 8.900", leads: 245, cpl: "R$ 36,33", ctr: "4.8%", conversions: 42 },
  { id: 3, name: "Retargeting Q1", platform: "Google Ads", status: "Pausada", spend: "R$ 5.200", leads: 89, cpl: "R$ 58,43", ctr: "2.1%", conversions: 12 },
  { id: 4, name: "Instagram Stories", platform: "Instagram", status: "Ativa", spend: "R$ 3.800", leads: 156, cpl: "R$ 24,36", ctr: "5.6%", conversions: 35 },
  { id: 5, name: "LinkedIn B2B", platform: "LinkedIn", status: "Finalizada", spend: "R$ 15.000", leads: 67, cpl: "R$ 223,88", ctr: "1.4%", conversions: 8 },
];

const chartData = [
  { name: "Google Ads", leads: 275, spend: 17700 },
  { name: "Facebook", leads: 245, spend: 8900 },
  { name: "Instagram", leads: 156, spend: 3800 },
  { name: "LinkedIn", leads: 67, spend: 15000 },
];

const statusColors: Record<string, string> = {
  Ativa: "bg-success/15 text-success",
  Pausada: "bg-warning/15 text-warning",
  Finalizada: "bg-muted text-muted-foreground",
};

const Campaigns = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Campanhas</h1>
        <p className="text-sm text-muted-foreground">Análise de desempenho de anúncios</p>
      </div>

      {/* Chart */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in">
        <h3 className="text-base font-semibold text-card-foreground mb-4">Leads por Plataforma</h3>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: "hsl(222, 28%, 12%)",
                  border: "1px solid hsl(222, 20%, 20%)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "13px",
                }}
              />
              <Bar dataKey="leads" fill="hsl(210, 100%, 55%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Campanha</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Investido</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Leads</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">CPL</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">CTR</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Conversões</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <Megaphone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.platform}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", statusColors[c.status])}>
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-card-foreground">{c.spend}</td>
                <td className="px-4 py-3 text-sm font-medium text-card-foreground">{c.leads}</td>
                <td className="px-4 py-3 text-sm text-card-foreground">{c.cpl}</td>
                <td className="px-4 py-3 text-sm text-card-foreground">{c.ctr}</td>
                <td className="px-4 py-3 text-sm font-medium text-card-foreground">{c.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
