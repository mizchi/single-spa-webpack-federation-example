import { registerApplication, start, navigateToUrl } from "single-spa";
import { h, render, Fragment } from "preact";

// navigateToUrl を発行するだけの x-link 要素
customElements.define(
  "x-link",
  class extends HTMLElement {
    connectedCallback() {
      this.style.textDecoration = "underline";
      this.style.color = "blue";
      this.addEventListener("click", (ev) => {
        ev.preventDefault();
        navigateToUrl(this.getAttribute("href"));
      });
    }
  }
);

const main = document.querySelector("#app");
const createApplication = async (name) => ({
  bootstrap: async () => {
    console.log(`${name}:bootstrap`);
  },
  mount: async () => {
    console.log(`${name}:mount`);
    render(h("h1", null, name), main);
  },
  unmount: async () => {
    console.log(`${name}:unmount`);
    render(h(Fragment), main);
  },
});

registerApplication(
  "header",
  async () => {
    const mod = await import("header/parcel");
    return mod.default();
  },
  (_location) => true
);

registerApplication(
  "content",
  async () => {
    const mod = await import("content/parcel");
    return mod.default();
  },
  (_location) => true
);

// registerApplication(
//   "xxx",
//   () => createApplication("xxx"),
//   (loc) => loc.pathname.startsWith("/xxx")
// );
// registerApplication(
//   "yyy",
//   () => createApplication("yyy"),
//   (loc) => loc.pathname.startsWith("/yyy")
// );

start();
