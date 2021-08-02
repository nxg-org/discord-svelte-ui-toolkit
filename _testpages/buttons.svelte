<h1 class="dc title">Buttons</h1>

<p class="dc">The stuff you click to do stuff.</p>

<div class="dc divider" />

<h5 class="dc">our button options</h5>
<code class="dc">
  {'<button class="dc $(bg | ul | ol) $color">label</button>'}
</code>

<div class="dc horizontal">
  <button class="dc bg">bg</button>
  <button class="dc bg green">Green</button>
  <button class="dc bg blurple">Blurple</button>
  <button class="dc bg red">Red</button>
</div>

<div class="dc horizontal">
  <button class="dc ul">ul</button>
  <button class="dc ul green">Green</button>
  <button class="dc ul blurple">Blurple</button>
  <button class="dc ul red">Red</button>
</div>

<div class="dc horizontal">
  <button class="dc ol">ol</button>
  <button class="dc ol green">Green</button>
  <button class="dc ol blurple">Blurple</button>
  <button class="dc ol red">Red</button>
</div>

<div class="dc divider" />

<h5 class="dc">You can add events to the button</h5>
<p class="dc">This is just here for completeness, find more examples in Reactivity</p>
<code class="dc">
  {`<button class="dc bg" on:click="{()=>alert('I was clicked!')}" />`}
</code>
<button class="dc bg" on:click={() => alert('I was clicked!')}>I'll alert you when I get clicked!</button>
