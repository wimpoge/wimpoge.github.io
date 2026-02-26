// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: process.env.BASE_PATH || ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 500 errors on specific pages
        if (path === '/sverdle') {
          return;
        }

        // For everything else, throw the error
        throw new Error(message);
      }
    }
  }
};