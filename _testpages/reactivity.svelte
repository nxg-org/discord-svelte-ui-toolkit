<script lang="ts">
  let colors = ['red', 'blurple', 'green'];
  function cycleColors(e: Event) {
    let old = colors.findIndex((v) => (e.target as HTMLElement).classList.contains(v));
    (e.target as HTMLElement).classList.replace(colors[old], colors[old + 1]);
  }
  let x = 0;
  function incrementX() {
    x++;
  }
</script>

<h1 class="dc title">Reactivity</h1>
<p class="dc">We want our UI to actually do something, so let's take a look at this, to get started here are some Examples</p>
<div class="dc divider" />

<h5 class="dc">Svelte and Events</h5>
<p class="dc">In Svelte, instead of the "normal" on-listeners (onclick, onchange, oninput, ...) there are on:-listeners (on:click, on:change, on:input, ...) which do basically the same thing but are tighter integrated with svelte. Events are attributes like the class string, though here you pass in a function instead of a string.</p>
<code class="dc">
  {`<button class="dc bg" on:click="{()=>alert('I was clicked!')}" />`}
</code>
<button class="dc bg" on:click={() => alert('I was clicked!')}>I'll alert you when I get clicked!</button>

<div class="dc divider" />

<h5 class="dc">using a function declared in the script tag</h5>
<p class="dc">writing your own functions inside of the html works but looks ugly (and isn't performant), so instead declare your functions inside of the script tag, give them a good descriptive name and reference them by name</p>

<code class="dc" style="margin-bottom: .25em;">
  {`let x = 0;
function incrementX(){
  x++
}`}
</code>
<code class="dc">
  {`<button class="dc ol" on:click={incrementX}>x = {x}</button>`}
</code>

<button class="dc ol" on:click={incrementX}>x = {x}</button>

<div class="dc divider" />

<h5 class="dc">Modifying classes of elements</h5>
<code class="dc">
  {`function cycleColors(e: Event) {
  let old = colors.findIndex((v) => (e.target as HTMLElement).classList.contains(v));
  (e.target as HTMLElement).classList.replace(colors[old], colors[old + 1]);
}`}
</code>
<button class="dc bg blurple" on:click={cycleColors}>This button cycles Colors!</button>
