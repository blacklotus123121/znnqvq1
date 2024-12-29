import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface WebhookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebhookModal = ({ isOpen, onClose }: WebhookModalProps) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [events, setEvents] = useState<string[]>([]);

  if (!isOpen) return null;

  const availableEvents = [
    { id: 'conversion', label: 'Conversão Registrada' },
    { id: 'sale', label: 'Venda Aprovada' },
    { id: 'campaign_status', label: 'Mudança de Status em Campanha' },
  ];

  const handleEventChange = (eventId: string) => {
    setEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg">
        <div className="bg-card border border-muted rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-6 border-b border-muted">
            <h2 className="text-lg font-semibold">Adicionar Webhook</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome do Webhook
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder="Ex: Notificações Slack"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                URL de Destino
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder="https://"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Eventos
              </label>
              <div className="space-y-2">
                {availableEvents.map((event) => (
                  <label key={event.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={events.includes(event.id)}
                      onChange={() => handleEventChange(event.id)}
                      className="rounded border-muted"
                    />
                    <span className="text-sm">{event.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button>
                Salvar Webhook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};