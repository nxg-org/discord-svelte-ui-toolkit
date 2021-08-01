<script lang="ts">
  export let layouts: import('./types.js').mainViewIconSidebarLayout;
  import MainViewSidebarItem from './misc/MainViewSidebarItem.svelte';
</script>

<div class="dc mainViewPanel">
  <div class="dc guildSidebar">
    {#each layouts as layoutItem}
      {#if typeof layoutItem == 'undefined'}
        <div class="dc divider" />
      {:else if layoutItem[0] == 'content'}
        <!-- content page -->
        <MainViewSidebarItem icon={layoutItem[2]} name={layoutItem[1]} />
      {:else if layoutItem[0] == 'button'}
        <!-- button -->
      {:else}
        <!-- folder -->
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .dc.mainViewPanel {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dc-background-primary);
  }
  .dc.guildSidebar {
    padding-top: 12px;
    box-sizing: border-box;
    display: flex;
    width: 72px;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dc-background-tertiary);
  }
</style>
