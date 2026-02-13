import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const conversionData = [
  { name: "Jan", taxa: 12 },
  { name: "Fev", taxa: 15 },
  { name: "Mar", taxa: 14 },
  { name: "Abr", taxa: 18 },
  { name: "Mai", taxa: 16 },
  { name: "Jun", taxa: 21 },
  { name: "Jul", taxa: 19 },
];

const sourceData = [
  { name: "Google Ads", value: 38 },
  { name: "Facebook", value: 28 },
  { name: "Instagram", value: 18 },
  { name: "Orgânico", value: 10 },
  { name: "Referência", value: 6 },
];

const COLORS = [
  "hsl(210, 100%, 55%)",
  "hsl(170, 80%, 45%)",
  "hsl(280, 65%, 55%)",
  "hsl(38, 92%, 55%)",
  "hsl(0, 72%, 55%)",
];

const sellerData = [
  { name: "Ana", fechados: 18, propostas: 32 },
  { name: "Carlos", fechados: 14, propostas: 28 },
  { name: "Maria", fechados: 12, propostas: 22 },
  { name: "João", fechados: 10, propostas: 19 },
  { name: "Rafael", fechados: 8, propostas: 15 },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
        <p className="text-sm text-muted-foreground">Análise detalhada de desempenho</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Conversion Rate */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in">
          <h3 className="text-base font-semibold text-card-foreground mb-1">Taxa de Conversão</h3>
          <p className="text-sm text-muted-foreground mb-4">% de leads convertidos por mês</p>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={{ background: "hsl(222, 28%, 12%)", border: "1px solid hsl(222, 20%, 20%)", borderRadius: "8px", color: "#fff", fontSize: "13px" }} />
                <Bar dataKey="taxa" fill="hsl(170, 80%, 45%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Source */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in">
          <h3 className="text-base font-semibold text-card-foreground mb-1">Origem dos Leads</h3>
          <p className="text-sm text-muted-foreground mb-4">Distribuição por canal</p>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourceData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {sourceData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(222, 28%, 12%)", border: "1px solid hsl(222, 20%, 20%)", borderRadius: "8px", color: "#fff", fontSize: "13px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Seller Performance */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in lg:col-span-2">
          <h3 className="text-base font-semibold text-card-foreground mb-1">Desempenho por Vendedor</h3>
          <p className="text-sm text-muted-foreground mb-4">Propostas vs negócios fechados</p>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sellerData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} width={60} />
                <Tooltip contentStyle={{ background: "hsl(222, 28%, 12%)", border: "1px solid hsl(222, 20%, 20%)", borderRadius: "8px", color: "#fff", fontSize: "13px" }} />
                <Legend />
                <Bar dataKey="propostas" fill="hsl(210, 100%, 55%)" radius={[0, 4, 4, 0]} name="Propostas" />
                <Bar dataKey="fechados" fill="hsl(170, 80%, 45%)" radius={[0, 4, 4, 0]} name="Fechados" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
