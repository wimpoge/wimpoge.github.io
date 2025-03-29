// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
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