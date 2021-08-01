import type { SvelteComponentDev } from 'svelte/internal';

export type settingsPage = [name: string, content: typeof SvelteComponentDev];

export type settingsSidebarLayout = (
  | string //title
  | settingsPage //page
  | undefined //separator
)[];

// button like the {server add button} on discord
export type mainViewIconSidebarButton = [
  type: 'button', //
  name: string,
  icon: string,
  func: Function
];

// like a server on discord, has an icon in the sidebar
export type mainViewContentItem = [
  type: 'content', //
  name: string,
  icon: string,
  content: typeof SvelteComponentDev
];

// defines the layout of a folder in the sidebar
// only typeof mainViewContentItem will be displayed when the
// folder isn't expanded
export type mainViewIconSidebarFolder = [
  type: 'folder',
  name: string|undefined,
  (mainViewContentItem|mainViewIconSidebarButton)[]
]
// (
//   | // | typeof SvelteComponentDev //button or something idk
//   mainViewContentItem //like a server on discord
//   | mainViewIconSidebarButton //a button in the thing
// )[];

// defines the layout of the sidebar of a mainView
export type mainViewIconSidebarLayout = (
  | // | typeof SvelteComponentDev //button or something idk, is gonna be really small
  mainViewContentItem //like a server on discord
  | mainViewIconSidebarFolder //a folder of stuff
  | mainViewIconSidebarButton //a button like the {server add button} on discord
  | undefined // the separator
)[];
