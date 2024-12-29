import React from 'react';
import { Switch } from '../../ui/Switch';
import { Settings, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';

export const WebhooksList = () => {
  const webhooks = [
    {
      id: '1',
      name: 'Slack Notifications',
      url: 'https://hooks.slack.com/services/xxx',
      events: ['conversion', 'sale'],
      active: true,
    },
    {
      id: '2',
      name: 'CRM Integration',
      url: 'https://api.crm.com/webhook',
      events: ['conversion'],
      active: false,
    },
  ];

  return (
    <div className="bg-card border border-muted rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-muted">
            <th className="px-6 py-3 text-left text-sm font-medium">Nome</th>
            <th className="px-6 py-3 text-left text-sm font-medium">URL</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Eventos</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-muted">
          {webhooks.map((webhook) => (
            <tr key={webhook.id}>
              <td className="px-6 py-4 text-sm">{webhook.name}</td>
              <td className="px-6 py-4 text-sm font-mono text-xs">{webhook.url}</td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {webhook.events.map((event) => (
                    <span
                      key={event}
                      className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <Switch checked={webhook.active} onCheckedChange={() => {}} />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Excluir
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};