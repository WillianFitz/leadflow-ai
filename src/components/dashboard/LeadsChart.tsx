import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", leads: 120, conversoes: 18 },
  { name: "Fev", leads: 180, conversoes: 28 },
  { name: "Mar", leads: 150, conversoes: 22 },
  { name: "Abr", leads: 220, conversoes: 35 },
  { name: "Mai", leads: 280, conversoes: 42 },
  { name: "Jun", leads: 310, conversoes: 48 },
  { name: "Jul", leads: 350, conversoes: 56 },
];

export function LeadsChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in">
      <h3 className="text-base font-semibold text-card-foreground">Leads vs Conversões</h3>
      <p className="text-sm text-muted-foreground mb-4">Últimos 7 meses</p>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210, 100%, 55%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(210, 100%, 55%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(170, 80%, 45%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(170, 80%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Area type="monotone" dataKey="leads" stroke="hsl(210, 100%, 55%)" fill="url(#leadGrad)" strokeWidth={2} />
            <Area type="monotone" dataKey="conversoes" stroke="hsl(170, 80%, 45%)" fill="url(#convGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
