<script lang="ts">
  let text = 'button text';
</script>

<h1 class="dc title">Input fields</h1>

<code class="dc">
  {'<input type="text" class="dc" placeholder="placeholder text" />'}
</code>
<input type="text" class="dc" placeholder="placeholder text" />

<h5 class="dc">Binding value to a variable</h5>
<code class="dc" style="margin-bottom: 8px;">
  {`let text = 'button text';`}
</code>
<code class="dc">
  {`<input class="dc" placeholder="button text" bind:value={text} />
<button class="dc bg green big_btn">{text}</button>`}
</code>
<div class="dc horizontal">
  <input class="dc" placeholder="button text" bind:value={text} />
  <button class="dc bg green big_btn">{text}</button>
</div>
