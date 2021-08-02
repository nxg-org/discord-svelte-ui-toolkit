<script lang="ts">
  import SettingsPanel from './SettingsPanel.svelte';
  const layout: (string | [string, typeof SvelteComponentDev] | undefined)[] = [
    'intro',
    ['Svelte', Svelte],
    ['HTML', Html],
    ['SCSS', Scss],
    ['TypeScript', TypeScript],
    undefined,
    'demo pages', //title
    ['Buttons', Buttons],
    ['Input field', inputpage],
    ['Alignment', Alignment],
    ['Reactivity', Reactivity],
    ['Examples', Wrong],
    undefined,
    'fetch tests',
    ['Api Endpoint', Api],
    ['XKCD', Xkcd],
    undefined,
    'other',
    ['scroll', Scroll],
  ];
  import inputpage from './_testpages/input.svelte';
  import Wrong from './_testpages/wrong.svelte';
  import type { SvelteComponentDev } from 'svelte/internal';
  import Scroll from './_testpages/scroll.svelte';
  import MainView from './MainView.svelte';
  import Api from './_testpages/api.svelte';
  import Xkcd from './_testpages/xkcd.svelte';
  import Buttons from './_testpages/buttons.svelte';
  import Alignment from './_testpages/alignment.svelte';
  import Reactivity from './_testpages/reactivity.svelte';
  import Svelte from './_testpages/svelte.svelte';
  import Html from './_testpages/html.svelte';
  import Scss from './_testpages/scss.svelte';
  import TypeScript from './_testpages/ts.svelte';
</script>

<SettingsPanel {layout} selected={Svelte} />
<!-- <MainView layouts={[['content', 'yeah that thing', '/favicon.ico', SettingsPanel]]} /> -->

<svelte:head>
  <style src="./discord.scss"></style>
</svelte:head>
