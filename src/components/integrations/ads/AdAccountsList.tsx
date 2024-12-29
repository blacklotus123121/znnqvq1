import React from 'react';
import { Settings, AlertCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

export const AdAccountsList = () => {
  const accounts = [
    {
      id: '1',
      name: 'Meta Ads Principal',
      platform: 'Meta Ads',
      status: 'connected',
    },
    {
      id: '2',
      name: 'Google Ads',
      platform: 'Google Ads',
      status: 'disconnected',
    },
  ];

  return (
    <div className="bg-card border border-muted rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-muted">
            <th className="px-6 py-3 text-left text-sm font-medium">Nome da Conta</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Plataforma</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-muted">
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="px-6 py-4 text-sm">{account.name}</td>
              <td className="px-6 py-4 text-sm">{account.platform}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  account.status === 'connected'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  {account.status === 'connected' ? 'Conectado' : 'Desconectado'}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar
                  </Button>
                  {account.status === 'disconnected' && (
                    <Button variant="outline" size="sm">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Reconectar
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};