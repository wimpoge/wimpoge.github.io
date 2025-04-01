import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
 
injectAnalytics({ mode: dev ? 'development' : 'production' });