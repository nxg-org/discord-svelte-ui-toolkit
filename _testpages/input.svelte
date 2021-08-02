<script lang="ts">
  let placeholder = '';
  let text = 'button text';
  function inputIsNumber(e: Event & { currentTarget: EventTarget & HTMLInputElement }, wrongclasses = 'red', correctclasses = '') {
    if ((e.target as HTMLInputElement).value == '' || (e.target as HTMLInputElement).value!.match(/^[0-9]+$/)) {
      wrongclasses.split(' ').forEach((c) => c && (e.target as HTMLInputElement).classList.remove(c));
      correctclasses.split(' ').forEach((c) => c && (!(e.target as HTMLInputElement).classList.contains(c) ? (e.target as HTMLElement).classList.add(c) : null));
    } else {
      correctclasses.split(' ').forEach((c) => c && (e.target as HTMLInputElement).classList.remove(c));
      wrongclasses.split(' ').forEach((c) => c && (!(e.target as HTMLInputElement).classList.contains(c) ? (e.target as HTMLElement).classList.add(c) : null));
    }
  }
</script>

<h1 class="dc title">Input fields</h1>

<p class="dc">You know, the stuff where you input text.</p>

<div class="dc divider" />

<h5 class="dc">Placeholders as hints for users</h5>
<p class="dc">The placeholder text should be an example value instead of a description.</p>

<code class="dc">
  {`<input type="text" class="dc" placeholder="${placeholder == '' ? 'placeholder text' : 'HEY LEAVE THE EXAMPLE ALONE'}" />`}
</code>
<input type="text" class="dc" placeholder="placeholder text" bind:value={placeholder} style="margin-bottom: 0;" />
<div class="dc divider" />

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

<h5 class="dc">Using Outline with Input</h5>
<code class="dc">
  {`<input type="text" class="dc ol $color" />`}
</code>
<div class="dc horizontal">
  <input type="text" class="dc ol red" />
  <input type="text" class="dc ol blurple" />
  <input type="text" class="dc ol green" />
</div>

<p class="dc">This can be useful to indicate if the entered value is correct, e.g. is a number</p>
<code class="dc">
  {`//YES I KNOW THIS LOOKS VERY BAD (AND IT IS), DON'T @ ME

function inputIsNumber(e: Event & { currentTarget: EventTarget & HTMLInputElement }, wrongclasses = 'red', correctclasses = '') {
  if ((e.target as HTMLInputElement).value == '' || (e.target as HTMLInputElement).value!.match(/^[0-9]+$/)) {
    wrongclasses.split(' ').forEach((c) => c && (e.target as HTMLInputElement).classList.remove(c));
    correctclasses.split(' ').forEach((c) => c && (!(e.target as HTMLInputElement).classList.contains(c) ? (e.target as HTMLElement).classList.add(c) : null));
  } else {
    correctclasses.split(' ').forEach((c) => c && (e.target as HTMLInputElement).classList.remove(c));
    wrongclasses.split(' ').forEach((c) => c && (!(e.target as HTMLInputElement).classList.contains(c) ? (e.target as HTMLElement).classList.add(c) : null));
  }
}`}
</code>
<code class="dc">
  {`<input type="text" class="dc ol" on:input={inputIsNumber} />`}
</code>
<input type="text" class="dc ol" placeholder="e.g. 480712342134" on:input={inputIsNumber} />
