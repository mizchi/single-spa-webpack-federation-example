import { h, render } from "preact";
import { navigateToUrl } from "single-spa";

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

export default async () => {
  return {
    bootstrap: async () => {},
    mount: async (props) => {
      render(
        h(
          "nav",
          null,
          h("x-link", { href: "/" }, "/"),
          "|",
          h("x-link", { href: "/xxx" }, "/xxx"),
          "|",
          h("x-link", { href: "/yyy" }, "/yyy")
        ),
        props.container
      );
    },
    unmount: async () => {
      // do not call
    },
  };
};
