import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface ConnectAdAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectAdAccountModal = ({ isOpen, onClose }: ConnectAdAccountModalProps) => {
  const [platform, setPlatform] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg">
        <div className="bg-card border border-muted rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-6 border-b border-muted">
            <h2 className="text-lg font-semibold">Conectar Nova Conta</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Selecione a Plataforma
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
              >
                <option value="">Selecione...</option>
                <option value="meta">Meta Ads</option>
                <option value="google">Google Ads</option>
                <option value="tiktok">TikTok Ads</option>
              </select>
            </div>

            {platform && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Clique no botão abaixo para iniciar o processo de autenticação com {platform === 'meta' ? 'Meta Ads' : platform === 'google' ? 'Google Ads' : 'TikTok Ads'}.
                </p>
                <Button className="w-full">
                  Conectar com {platform === 'meta' ? 'Meta Ads' : platform === 'google' ? 'Google Ads' : 'TikTok Ads'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};