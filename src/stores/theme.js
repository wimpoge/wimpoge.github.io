import { writable } from 'svelte/store';

const isClient = typeof window !== 'undefined';

const defaultTheme = isClient ? localStorage.getItem('theme') || 'light' : 'light';
if (isClient) {
  document.documentElement.setAttribute('data-theme', defaultTheme);
}

export const theme = writable(defaultTheme);

if (isClient) {
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  });
}
