<script lang="ts">
  export let layouts: import('./types.js').mainViewIconSidebarLayout;
  let dc = '';
</script>

<div>
  {#each layouts as layoutItem}
    {#if typeof layoutItem[0] == 'string'}
      {#if typeof layoutItem[1] == 'function'}
        <!-- button or something -->
      {:else}
        <!-- content page -->
      {/if}
    {:else}
      <!-- folder -->
    {/if}
  {/each}
</div>

<style lang="scss">
  .dc.mainViewPanel {
  }
</style>
