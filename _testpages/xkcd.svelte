<script lang="ts">
  let req: Promise<{
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  }>;
  let num: string | number | undefined;
  let latest: number;
  $: req = new Promise(async (res, rej) => {
    let resp = await fetch(`https://xkcd.now.sh/?comic=${num ?? 'latest'}`).then((r) => r.json(), rej);
    if (!num) num = resp.num;
    if (!latest) latest = resp.num;
    res(resp);
  });
</script>

<div class="dc horizontal">
  <button class="dc bg" on:click={() => (num = num ? Number(num) - 1 : undefined)}>Prev</button>
  <input type="text" class="dc" id="url" bind:value={num} placeholder="XKCD number" />
  <button class="dc bg" on:click={() => (num = num ? Number(num) + 1 : undefined)}>Next</button>
</div>

{#if req}
  {#await req}
    <p class="dc">Loading...</p>
  {:then resp}
    <div class="dc horizontal">
      <h1 class="dc title">{resp.title}</h1>
      <h5 class="dc" style="margin-top: auto;">{resp.day}.{resp.month}.{resp.year}</h5>
    </div>
    <!-- <h5 class="dc">{resp.alt}</h5> -->
    <img src={resp.img} alt="XKCD#{resp.num}" title={resp.alt} />
    {#if resp.transcript != ''}
      <h5 class="dc">transcript</h5>
      <p class="dc" style="color: white;">{@html resp.transcript.replaceAll('[[', '<em>').replaceAll(']]', '</em>').replaceAll('\n', '<br />')}</p>
    {/if}
  {:catch}
    <div class="dc horizontal">
      <button class="dc">XKCD not found</button>
      <button class="dc ul" on:click={() => (num = undefined)}>Load latest instead</button>
    </div>
  {/await}
{:else}
  Please input an xkcd to load.
{/if}
