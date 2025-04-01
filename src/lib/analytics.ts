import { browser } from '$app/environment';
import { inject } from '@vercel/analytics';

export function initAnalytics() {
  if (browser) {
    inject();
  }
}