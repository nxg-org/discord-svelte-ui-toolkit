<script lang="ts">
  let x = 'Hello World!';
  let todo = ['eat', 'sleep'];
  let promise: Promise<number>;
  function drawLuckyNumber() {
    promise = new Promise((res) => {
      let luckyNumber = Math.floor(Math.random() * 100);
      setTimeout(() => res(luckyNumber), 2000);
    });
  }
  drawLuckyNumber();
</script>

<h1 class="dc">Svelte</h1>
<p class="dc">
  Svelte is like a great fusion of HTML, SCSS and TypeScript.<br />
  For them there are separate help pages on the left. <br />
  Here a small Introduction to Svelte
</p>
<div class="dc space" />
<h5 class="dc">Svelte document structure</h5>
<code class="dc">
  {`<` + // break up script and style tags in code blocks
    `script lang="ts">
  // All your TypeScript
</script>

<!-- All your HTML -->

<` +
    `style lang="scss">
  // some SCSS
</style>`}
</code>
<div class="dc divider" />

<h3 class="dc">Ways to use Variables in the Svelte HTML part</h3>
<h5 class="dc">Use Variables in HTML with {'{}'}</h5>
<code class="dc" style="margin-bottom: .25em;">
  {`let x = 'Hello World!'`}
</code>
<code class="dc">
  {`<input bind:value={x}>
<code>{x}</code>`}
</code>
<div class="dc horizontal" style="margin-bottom: 0;">
  <input class="dc" type="text" bind:value={x} />
  <code class="dc" style="width: 100%;">{x}</code>
</div>
<div class="dc space" />

<h5 class="dc">Conditionally display certain elements</h5>
<p class="dc">There are if statements in Svelte</p>
<code class="dc" style="margin-bottom: .25em;">
  {`let happy = true;
let sleepy = false;`}
</code>
<code class="dc">
  {`{#if happy}
  happy
{:else if sleepy} //this is how you can build an if ladder
  i wanna sleep
{:else} //optional
  what a shit day
{/if}`}
</code>
<p class="dc">i wanna sleep</p>

<div class="dc space" />

<h5 class="dc">Unpacking Arrays into multiple elements</h5>
<p class="dc">{`{#each ...} acts like a for loop`}</p>
<code class="dc" style="margin-bottom: .25em;">let todo = ['eat', 'sleep'];</code>
<code class="dc">
  {`Todo:<br />
{#each todo as todoItem}
  - {todoItem}<br />
{:else} //optional
  No Items on the todo list.
{/each}`}
</code>
<p class="dc">
  Todo:<br />
  {#each todo as todoItem}
    - {todoItem}<br />
  {/each}
</p>
<div class="dc space" />

<h5 class="dc">awaiting promises</h5>
<p class="dc">{`When making requests to load something or dispatching an action, you can use {#await ...} to wait for it to load and display a helpful wait message until then`}</p>
<code class="dc" style="margin-bottom: .25em;">
  {`function drawLuckyNumber() {
  promise = new Promise((res) => {
    let luckyNumber = Math.floor(Math.random() * 100);
    setTimeout(() => res(luckyNumber), 2000);
  });
}`}
</code>
<code class="dc">
  {`{#await promise}
  Loading...
{:then response}
  Your Lucky number is: {response}
{:catch e} //optional
  Ah shit an error happened<br>
  Error: \`{e}\`
{/await}`}
</code>

<div class="dc horizontal">
  <button class="dc bg green" on:click={drawLuckyNumber}>Draw Lucky Number</button>
  <button class="dc bg red" on:click={() => (promise = new Promise((res, rej) => rej('404 Sleep not found')))}>Error</button>
</div>

{#await promise}
  Loading...
{:then response}
  Your Lucky number is: {response}
{:catch e}
  Ah shit an error happened<br />
  Error: `{e}`
{/await}
