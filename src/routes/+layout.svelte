<script lang="ts">
  import "../app.css";
  import { initAnalytics } from '$lib/analytics';
  import { onMount } from 'svelte';
 
  let { children } = $props();
  
  onMount(() => {
    // Call the function to initialize analytics
    initAnalytics();
  });
</script>

{@render children()}