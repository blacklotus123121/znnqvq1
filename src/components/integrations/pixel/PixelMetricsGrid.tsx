import React from 'react';
import { Pixel } from '../../../types/pixel';

interface PixelMetricsGridProps {
  pixels: Pixel[];
}

export const PixelMetricsGrid = ({ pixels }: PixelMetricsGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {pixels.map((pixel) => (
        <div key={pixel.id} className="bg-card border border-muted rounded-lg p-4">
          <h3 className="text-sm font-medium mb-4">{pixel.name} - Métricas</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Cliques</span>
              <span className="text-sm font-medium">{pixel.metrics.clicks}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Conversões</span>
              <span className="text-sm font-medium">{pixel.metrics.conversions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Add to Cart</span>
              <span className="text-sm font-medium">{pixel.metrics.addToCart}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Compras</span>
              <span className="text-sm font-medium">{pixel.metrics.purchases}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};