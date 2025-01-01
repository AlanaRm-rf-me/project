import { ServiceItem, COMPLEXITY_MULTIPLIER } from '../types/service';

const BASE_HOURLY_RATE = 50; // Base rate for development work

export function calculateServiceCost(service: ServiceItem): number {
  if (service.type !== 'service' || !service.hours) {
    return service.price;
  }

  // Calculate tool costs (monthly costs divided by 160 work hours per month)
  const toolsCostPerHour = service.tools?.reduce((sum, tool) => 
    sum + (tool.monthlyCost / 160), 0) || 0;

  // Calculate base cost with complexity multiplier
  const complexityRate = service.complexity ? 
    COMPLEXITY_MULTIPLIER[service.complexity] : 1;
  
  const hourlyRate = (BASE_HOURLY_RATE + toolsCostPerHour) * complexityRate;
  
  return Number((hourlyRate * service.hours).toFixed(2));
}