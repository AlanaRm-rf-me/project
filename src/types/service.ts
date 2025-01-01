export interface ServiceTool {
  name: string;
  monthlyCost: number;
}

export interface ServiceItem extends InvoiceItem {
  type: 'service' | 'product';
  hours?: number;
  complexity?: 'low' | 'medium' | 'high';
  tools?: ServiceTool[];
}

export const COMPLEXITY_MULTIPLIER = {
  low: 1,
  medium: 1.5,
  high: 2,
};