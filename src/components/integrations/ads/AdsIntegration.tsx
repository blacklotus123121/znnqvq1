import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Plus } from 'lucide-react';
import { ConnectAdAccountModal } from './ConnectAdAccountModal';
import { AdAccountsList } from './AdAccountsList';

export const AdsIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Contas de Anúncios</h2>
          <p className="text-sm text-muted-foreground">
            Conecte suas contas de anúncios para importar dados automaticamente
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Conectar Nova Conta
        </Button>
      </div>

      <AdAccountsList />
      
      <ConnectAdAccountModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};