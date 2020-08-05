import { h, render } from "preact";

export default async () => {
  return {
    bootstrap: async () => {},
    mount: async () => {
      const content = document.querySelector("#app");
      render(h("h1", null, "hello"), content);
    },
    unmount: async () => {},
  };
};
