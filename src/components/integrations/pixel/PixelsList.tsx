import React from 'react';
import { PixelsTable } from './PixelsTable';
import { PixelMetricsGrid } from './PixelMetricsGrid';

export const PixelsList = () => {
  const pixels = [
    {
      id: '1',
      name: 'Meta Pixel',
      platform: 'Meta',
      pixelId: '123456789',
      active: true,
      metrics: {
        clicks: 1234,
        conversions: 56,
        addToCart: 89,
        purchases: 23,
      },
    },
    {
      id: '2',
      name: 'Google Analytics',
      platform: 'Google',
      pixelId: 'G-ABCDEF123',
      active: true,
      metrics: {
        clicks: 2345,
        conversions: 78,
        addToCart: 120,
        purchases: 45,
      },
    },
  ];

  return (
    <div className="space-y-6">
      <PixelsTable pixels={pixels} />
      <PixelMetricsGrid pixels={pixels} />
    </div>
  );
};