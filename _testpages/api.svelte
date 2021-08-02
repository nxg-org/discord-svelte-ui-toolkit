<script lang="ts">
  let req: Promise<string>;
  let url = '';
  $: req = url == '' ? undefined : new Promise((res, rej) => fetch(url).then((r) => r.text().then(res, rej), rej));
</script>

<input type="text" class="dc" id="url" bind:value={url} placeholder="/api/test" />

{#if req}
  {#await req}
    <code class="dc">Request fetching...</code>
  {:then resp}
    <code class="dc">
      {resp}
    </code>
  {/await}
{/if}
