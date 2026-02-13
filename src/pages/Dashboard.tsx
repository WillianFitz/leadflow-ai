import { KpiCard } from "@/components/dashboard/KpiCard";
import { FunnelChart } from "@/components/dashboard/FunnelChart";
import { LeadsChart } from "@/components/dashboard/LeadsChart";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { Target, DollarSign, TrendingUp, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Visão geral do seu CRM</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total de Leads"
          value="1.248"
          change="+12.5% vs mês anterior"
          changeType="positive"
          icon={Target}
          delay={0}
        />
        <KpiCard
          title="Conversões"
          value="186"
          change="+8.2% vs mês anterior"
          changeType="positive"
          icon={TrendingUp}
          delay={100}
        />
        <KpiCard
          title="Receita"
          value="R$ 284.5K"
          change="+23.1% vs mês anterior"
          changeType="positive"
          icon={DollarSign}
          delay={200}
        />
        <KpiCard
          title="Clientes Ativos"
          value="42"
          change="+3 este mês"
          changeType="positive"
          icon={Users}
          delay={300}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LeadsChart />
        <FunnelChart />
      </div>

      {/* Recent */}
      <RecentLeads />
    </div>
  );
};

export default Dashboard;
