import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Plus } from 'lucide-react';
import { WebhooksList } from './WebhooksList';
import { WebhookModal } from './WebhookModal';

export const WebhooksIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Webhooks</h2>
          <p className="text-sm text-muted-foreground">
            Configure webhooks para enviar dados em tempo real para outras ferramentas
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Webhook
        </Button>
      </div>

      <WebhooksList />
      
      <WebhookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};