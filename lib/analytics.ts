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
 * Track book demo events with location and CTA text
 */
export function trackBookDemo(location: string, ctaText: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'book_demo', {
      cta_location: location,
      cta_text: ctaText,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track video play events
 */
export function trackVideoPlay(videoTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_play', {
      video_title: videoTitle,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track pricing page views with utm_source
 */
export function trackPricingPageView(utmSource?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pricing_page_view', {
      utm_source: utmSource || 'direct',
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track integration clicks
 */
export function trackIntegrationClick(integrationName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'integration_click', {
      integration_name: integrationName,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track form submissions with form type
 */
export function trackFormSubmission(formType: string, success: boolean = true) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      form_type: formType,
      success: success,
      timestamp: new Date().toISOString(),
    });
  }
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

