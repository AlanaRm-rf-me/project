import { gradients, glassEffect } from '../constants/colors';
import { animations } from '../constants/animations';

export function useCyberpunkTheme() {
  return {
    gradients,
    glassEffect,
    animations,
    
    // Utility functions for commonly used combinations
    getGlassStyles: () => 
      `${glassEffect.background} ${glassEffect.border} ${glassEffect.hover}`,
      
    getChromaticText: () =>
      'chromatic-text',
      
    getConstellationBg: () =>
      'constellation-bg'
  };
}