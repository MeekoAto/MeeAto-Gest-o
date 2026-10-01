export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaVariant: 'outline' | 'primary';
}

export interface FeatureItem {
  icon: string;
  title: string;
  subtitle: string;
}

export type BusinessSegment = 'adegas' | 'restaurantes' | 'lanchonetes' | 'varejo';

export interface SegmentInfo {
  id: BusinessSegment;
  name: string;
  badge: string;
  description: string;
  highlights: string[];
  sampleMetric: {
    label: string;
    value: string;
    sub: string;
  };
}

export interface DeviceStatus {
  id: string;
  name: string;
  type: 'printer' | 'pos' | 'nfc' | 'scale';
  connected: boolean;
  model: string;
  port: string;
}
