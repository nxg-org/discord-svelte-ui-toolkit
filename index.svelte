<script lang="ts">
  import SettingsPanel from './SettingsPanel.svelte';
  const layout: (string | [string, typeof SvelteComponentDev] | undefined)[] = [
    'test pages', //title
    ['Inputs', inputpage],
    ['Examples', Wrong],
    undefined,
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
    ['scroll', Scroll],
  ];
  import inputpage from './_testpages/input.svelte';
  import Wrong from './_testpages/wrong.svelte';
  import type { SvelteComponentDev } from 'svelte/internal';
  import Scroll from './_testpages/scroll.svelte';
  import MainView from './MainView.svelte';
</script>

<!-- <SettingsPanel {layout} selected={inputpage} /> -->
<MainView layouts={[['content', 'yeah that thing', '/favicon.ico', SettingsPanel]]} />

<svelte:head>
  <style src="./discord.scss"></style>
</svelte:head>
