export interface PixelMetrics {
  clicks: number;
  conversions: number;
  addToCart: number;
  purchases: number;
}

export interface Pixel {
  id: string;
  name: string;
  platform: string;
  pixelId: string;
  active: boolean;
  metrics: PixelMetrics;
}