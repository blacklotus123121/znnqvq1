import React from 'react';
import { Settings, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';

export const UtmTemplatesList = () => {
  const templates = [
    {
      id: '1',
      name: 'Facebook Ads',
      source: 'facebook',
      medium: 'cpc',
      campaign: '{campaign_name}',
      content: '{ad_name}',
      term: '{keyword}',
      autoApply: true,
    },
    {
      id: '2',
      name: 'Google Search',
      source: 'google',
      medium: 'cpc',
      campaign: '{campaign_name}',
      content: '{ad_group}',
      term: '{keyword}',
      autoApply: false,
    },
  ];

  return (
    <div className="bg-card border border-muted rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-muted">
            <th className="px-6 py-3 text-left text-sm font-medium">Nome</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Source</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Medium</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Campaign</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Auto Apply</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-muted">
          {templates.map((template) => (
            <tr key={template.id}>
              <td className="px-6 py-4 text-sm">{template.name}</td>
              <td className="px-6 py-4 text-sm">{template.source}</td>
              <td className="px-6 py-4 text-sm">{template.medium}</td>
              <td className="px-6 py-4 text-sm">{template.campaign}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  template.autoApply
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {template.autoApply ? 'Sim' : 'Não'}
                </span>
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