import type { SvelteComponentDev } from 'svelte/internal';

export type settingsPage = [name: string, content: typeof SvelteComponentDev]

export type settingsSidebarLayout = (
  | string //title
  | settingsPage //page
  | undefined //separator
)[];

// button like the {server add button} on discord
export type mainViewIconSidebarButton = [icon: string, function: Function, name: string];

// like a server on discord, has an icon in the sidebar
export type mainViewContentItem = [icon: string, content: typeof SvelteComponentDev, name: string];

// defines the layout of a folder in the sidebar
// only typeof mainViewContentItem will be displayed when the
// folder isn't expanded
export type mainViewIconSidebarFolder = (
  // | typeof SvelteComponentDev //button or something idk
  | mainViewContentItem //like a server on discord
  | mainViewIconSidebarButton //a button in the thing
)[];

// defines the layout of the sidebar of a mainView
export type mainViewIconSidebarLayout = (
  // | typeof SvelteComponentDev //button or something idk, is gonna be really small
  | mainViewContentItem //like a server on discord
  | mainViewIconSidebarFolder //a folder of stuff
  | mainViewIconSidebarButton //a button like the {server add button} on discord
  | undefined // the separator
)[];
