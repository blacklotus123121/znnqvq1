import React from 'react';
import { Switch } from '../../ui/Switch';
import { Settings, Trash2, Activity } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Pixel } from '../../../types/pixel';

interface PixelsTableProps {
  pixels: Pixel[];
}

export const PixelsTable = ({ pixels }: PixelsTableProps) => {
  return (
    <div className="bg-card border border-muted rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-muted">
            <th className="px-6 py-3 text-left text-sm font-medium">Nome</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Plataforma</th>
            <th className="px-6 py-3 text-left text-sm font-medium">ID do Pixel</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-muted">
          {pixels.map((pixel) => (
            <tr key={pixel.id}>
              <td className="px-6 py-4 text-sm">{pixel.name}</td>
              <td className="px-6 py-4 text-sm">{pixel.platform}</td>
              <td className="px-6 py-4 text-sm font-mono">{pixel.pixelId}</td>
              <td className="px-6 py-4">
                <Switch checked={pixel.active} onCheckedChange={() => {}} />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Activity className="w-4 h-4 mr-2" />
                    Métricas
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