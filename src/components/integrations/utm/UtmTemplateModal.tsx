import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Switch } from '../../ui/Switch';

interface UtmTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UtmTemplateModal = ({ isOpen, onClose }: UtmTemplateModalProps) => {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [medium, setMedium] = useState('');
  const [campaign, setCampaign] = useState('');
  const [content, setContent] = useState('');
  const [term, setTerm] = useState('');
  const [autoApply, setAutoApply] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg">
        <div className="bg-card border border-muted rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-6 border-b border-muted">
            <h2 className="text-lg font-semibold">Adicionar Template UTM</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome do Template
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder="Ex: Facebook Ads"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Source
                </label>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                  placeholder="Ex: facebook"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Medium
                </label>
                <input
                  type="text"
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                  className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                  placeholder="Ex: cpc"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Campaign
              </label>
              <input
                type="text"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder="Ex: {campaign_name}"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Content (opcional)
                </label>
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                  placeholder="Ex: {ad_name}"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Term (opcional)
                </label>
                <input
                  type="text"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
                  placeholder="Ex: {keyword}"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                Aplicar automaticamente
              </label>
              <Switch
                checked={autoApply}
                onCheckedChange={setAutoApply}
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button>
                Salvar Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};