import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Plus } from 'lucide-react';
import { UtmTemplatesList } from './UtmTemplatesList';
import { UtmTemplateModal } from './UtmTemplateModal';

export const UtmIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Templates de UTM</h2>
          <p className="text-sm text-muted-foreground">
            Gerencie seus templates de UTM para padronizar suas URLs de campanha
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Template
        </Button>
      </div>

      <UtmTemplatesList />
      
      <UtmTemplateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};