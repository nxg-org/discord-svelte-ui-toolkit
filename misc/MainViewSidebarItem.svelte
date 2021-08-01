<script lang="ts">
  export let icon: string;
  export let name: string;
</script>

<div class="dc container">
  <div class="dc hovIndicator" />
  {#if icon == ''}
    <!-- no icon path or raw icon supplied -->
  {:else}
    <img src={icon} alt={name} />
  {/if}
  <!-- {name} -->
</div>

<style lang="scss">
  .container {
    width: 100%;
    &:focus-within .dc.hovIndicator {

    }
  }
</style>
