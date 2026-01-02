// Google Analytics event tracking utility

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Track custom events in Google Analytics
 */
export function trackEvent({
  action,
  category,
  label,
  value,
}: AnalyticsEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Track page views
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-WQDNK7TP7F', {
      page_path: url,
    });
  }
}

/**
 * Track button clicks (CTAs)
 */
export function trackCTA(ctaName: string, location: string) {
  trackEvent({
    action: 'click',
    category: 'CTA',
    label: `${ctaName} - ${location}`,
  });
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string) {
  trackEvent({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number) {
  trackEvent({
    action: 'scroll',
    category: 'Engagement',
    label: `${depth}%`,
    value: depth,
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, linkText: string) {
  trackEvent({
    action: 'click',
    category: 'Outbound Link',
    label: `${linkText} - ${url}`,
  });
}

/**
 * Track key events (conversions)
 */
export function trackKeyEvent(eventName: string, value?: number) {
  trackEvent({
    action: eventName,
    category: 'Key Event',
    value: value,
  });
}

/**
 * Initialize scroll depth tracking
 */
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  const depths = [25, 50, 75, 100];
  const tracked: Set<number> = new Set();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    depths.forEach((depth) => {
      if (scrollPercent >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackScrollDepth(depth);
      }
    });
  };

  // Throttle scroll events
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

