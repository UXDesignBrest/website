import { writable } from "svelte/store";

function createMenuStore() {
  const { subscribe, set, update } = writable(false);

  return {
    menuIsOpen: {
      subscribe,
    },
    closeMenu: () => set(false),
    openMenu: () => set(true),
    toggleMenu: () => update((value) => !value),
  };
}

const menuStore = createMenuStore();

export { menuStore };
