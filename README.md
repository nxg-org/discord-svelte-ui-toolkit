# what this is

this is a toolkit to make discord-like ui websites with svelte

# how to use it

filesystem structure in your project

```fs
project
├── svelte
│   ├── discord <- this as a submodule
│   ├── index.html
│   ├── index.ts
│   ├── index.svelte (X)
│   ├── tsconfig.json
│   └── ...
└── ...
```

in your project root, do:

```sh
git submodule add https://github.com/nxg-org/discord-svelte-ui-toolkit ./svelte/discord
```

then to your main svelte file, add this:

```svelte
<svelte:head>
  <style src="./discord/discord.scss"></style>
</svelte:head>
```
