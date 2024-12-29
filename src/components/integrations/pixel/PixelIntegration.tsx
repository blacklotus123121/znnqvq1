import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Plus } from 'lucide-react';
import { PixelsList } from './PixelsList';
import { PixelModal } from './PixelModal';

export const PixelIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Pixels de Rastreamento</h2>
          <p className="text-sm text-muted-foreground">
            Configure e gerencie seus pixels de rastreamento
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Pixel
        </Button>
      </div>

      <PixelsList />
      
      <PixelModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};