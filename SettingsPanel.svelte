<script lang="ts">
  import type { SvelteComponentDev } from 'svelte/internal';

  export let layout: (string | [string, typeof SvelteComponentDev] | undefined)[];
  export let selected: typeof SvelteComponentDev;
</script>

<div class="dc settingsPanel">
  <div class="dc sidebarRegion scrollbar2">
    <div class="dc sidebarRegionScroller">
      <nav class="dc sidebar">
        <div class="dc side">
          {#each layout as option}
            {#if typeof option === 'object'}
              <div class="dc item whitney {option[1] == selected ? 'selected' : ''}" on:click={() => (selected = option[1])}>{option[0]}</div>
            {:else if typeof option === 'string'}
              <div class="dc header">{option}</div>
            {:else}
              <div class="dc separator" />
            {/if}
          {/each}
        </div>
      </nav>
    </div>
  </div>
  <div class="dc contentRegion">
    <div class="dc contentTransitionWrap">
      <div class="dc contentRegionScroller scrollbar1">
        <div class="dc contentColumn">
          <svelte:component this={selected} />
        </div>
      </div>
    </div>
  </div>
</div>
