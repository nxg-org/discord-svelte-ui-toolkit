<h1 class="dc title">Examples and Advice</h1>

<h5 class="dc">#1 Button without ul, ol or bg class</h5>
<div class="dc horizontal wrong" style="width: max-content;">
  <button class="dc blurple">None</button>
  <button class="dc green">of these</button>
  <button class="dc red">have</button>
</div>
<div class="dc horizontal correct" style="width: max-content;">
  <button class="dc bg blurple"><strong>bg</strong></button>
  <button class="dc ul green"><strong>ul</strong></button>
  <button class="dc ol red">or <strong style="padding-left: .25em;">ol</strong></button>
</div>

<h5 class="dc">#2 Horizontal Input but Buttons not marked with big_btn</h5>
<div class="dc horizontal wrong">
  <input class="dc" />
  <button class="dc ol red">bad</button>
</div>
<div class="dc horizontal correct">
  <input class="dc" placeholder="Useful Hint for the User" />
  <button class="dc ol green">good</button>
</div>

<h5 class="dc">#3 Divider directly below heading</h5>
<div class="dc horizontal wrong">
  <div class="dc divider" />
</div>
<div class="dc correct">
  <h5 class="dc">my day today</h5>
  <p class="dc">This is such a great day today. Like what all happened! It was incredible. Sit ipsum est quibusdam tenetur dicta. Exercitationem voluptates et dolores. Quae impedit quasi ipsam aliquid qui minus distinctio aliquid. Quos est necessitatibus perferendis ea. Qui nemo optio aut et non.</p>
  <div class="dc divider" />
</div>

<h5 class="dc">#X Don't end with a divider</h5>
<div class="dc wrong">
  <div class="dc divider" />
</div>
<div class="dc correct">
  <p class="dc">And this is how the page ends.</p>
</div>

<style lang="scss">
  .wrong {
    background: #6333;
    padding: 5px;
    margin-bottom: 20px;
  }
  .correct {
    background: #3633;
    padding: 5px;
    margin-bottom: 20px;
  }
</style>
