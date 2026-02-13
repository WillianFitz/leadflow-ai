import { Building2, Bell, Shield, Palette, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
        <p className="text-sm text-muted-foreground">Gerencie as configurações do sistema</p>
      </div>

      {/* Company Info */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="h-5 w-5 text-primary" />
          <h3 className="text-base font-semibold text-card-foreground">Dados da Empresa</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Nome da Empresa</Label>
            <Input defaultValue="LeadPulse Inc." />
          </div>
          <div className="space-y-2">
            <Label>CNPJ</Label>
            <Input defaultValue="12.345.678/0001-01" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue="contato@leadpulse.io" />
          </div>
          <div className="space-y-2">
            <Label>Telefone</Label>
            <Input defaultValue="(11) 99999-0000" />
          </div>
        </div>
        <Button size="sm" className="gradient-primary border-0 text-primary-foreground">
          Salvar Alterações
        </Button>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="text-base font-semibold text-card-foreground">Notificações</h3>
        </div>
        <div className="space-y-4">
          {[
            { label: "Novo lead capturado", desc: "Receber notificação quando um novo lead entrar" },
            { label: "Lead convertido", desc: "Notificar quando um lead for convertido" },
            { label: "Relatório semanal", desc: "Enviar resumo semanal por email" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="text-base font-semibold text-card-foreground">Segurança</h3>
        </div>
        <div className="space-y-4">
          {[
            { label: "Autenticação em 2 fatores", desc: "Adicionar uma camada extra de segurança" },
            { label: "Logs de acesso", desc: "Registrar todas as ações dos usuários" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Switch />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
