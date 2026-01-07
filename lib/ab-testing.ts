/**
 * A/B Testing Utilities for HealOps Website
 * 
 * This module provides simple A/B testing functionality for testing
 * different variants of CTAs, headlines, and other elements.
 */

export type Variant = 'A' | 'B' | 'C';

export interface ABTest {
  testName: string;
  variants: {
    [key in Variant]?: {
      name: string;
      weight: number; // 0-100, percentage of traffic
    };
  };
}

/**
 * A/B Tests Configuration
 * 
 * Add new tests here. Weights should add up to 100.
 */
export const abTests: Record<string, ABTest> = {
  heroCTA: {
    testName: 'Hero CTA Text',
    variants: {
      A: { name: 'Book a Demo', weight: 33 },
      B: { name: 'Start Free Trial', weight: 34 },
      C: { name: 'See It In Action', weight: 33 },
    },
  },
  formFields: {
    testName: 'Contact Form Fields',
    variants: {
      A: { name: 'Email Only', weight: 50 },
      B: { name: 'Email + Company', weight: 50 },
    },
  },
  socialProof: {
    testName: 'Social Proof Placement',
    variants: {
      A: { name: 'Above Fold', weight: 50 },
      B: { name: 'After Hero', weight: 50 },
    },
  },
  videoAutoplay: {
    testName: 'Video Autoplay',
    variants: {
      A: { name: 'On', weight: 50 },
      B: { name: 'Off', weight: 50 },
    },
  },
};

/**
 * Get variant for a user based on their session
 * Uses localStorage to persist variant across page loads
 */
export function getVariant(testName: string): Variant {
  if (typeof window === 'undefined') return 'A';

  const storageKey = `ab_${testName}`;
  
  // Check if user already has an assigned variant
  const stored = localStorage.getItem(storageKey);
  if (stored && ['A', 'B', 'C'].includes(stored)) {
    return stored as Variant;
  }

  // Assign new variant based on weights
  const test = abTests[testName];
  if (!test) return 'A';

  const random = Math.random() * 100;
  let cumulative = 0;

  for (const [variant, config] of Object.entries(test.variants)) {
    cumulative += config.weight;
    if (random <= cumulative) {
      const assignedVariant = variant as Variant;
      localStorage.setItem(storageKey, assignedVariant);
      return assignedVariant;
    }
  }

  return 'A'; // Fallback
}

/**
 * Track A/B test variant impression
 */
export function trackVariantImpression(testName: string, variant: Variant) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_impression', {
      test_name: testName,
      variant: variant,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track A/B test conversion
 */
export function trackVariantConversion(testName: string, variant: Variant, conversionType: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_conversion', {
      test_name: testName,
      variant: variant,
      conversion_type: conversionType,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Example usage in a React component:
 * 
 * ```typescript
 * import { getVariant, trackVariantImpression } from '@/lib/ab-testing';
 * import { useEffect, useState } from 'react';
 * 
 * export function MyComponent() {
 *   const [variant, setVariant] = useState<'A' | 'B'>('A');
 * 
 *   useEffect(() => {
 *     const v = getVariant('heroCTA');
 *     setVariant(v);
 *     trackVariantImpression('heroCTA', v);
 *   }, []);
 * 
 *   return (
 *     <button>
 *       {variant === 'A' ? 'Book a Demo' : 'Start Free Trial'}
 *     </button>
 *   );
 * }
 * ```
 */

