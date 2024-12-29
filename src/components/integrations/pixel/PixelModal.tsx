import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface PixelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PixelModal = ({ isOpen, onClose }: PixelModalProps) => {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [pixelId, setPixelId] = useState('');

  if (!isOpen) return null;

  const handleTestConnection = () => {
    // Implement pixel test connection logic
    console.log('Testing pixel connection...');
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg">
        <div className="bg-card border border-muted rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-6 border-b border-muted">
            <h2 className="text-lg font-semibold">Adicionar Pixel</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome do Pixel
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder="Ex: Meta Pixel Principal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Plataforma
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
              >
                <option value="">Selecione...</option>
                <option value="meta">Meta</option>
                <option value="google">Google Analytics</option>
                <option value="tiktok">TikTok</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                ID do Pixel
              </label>
              <input
                type="text"
                value={pixelId}
                onChange={(e) => setPixelId(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder={platform === 'google' ? 'G-XXXXXXXXXX' : 'Digite o ID do pixel'}
              />
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={handleTestConnection}
              disabled={!platform || !pixelId}
            >
              Testar Conexão
            </Button>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button>
                Salvar Pixel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};