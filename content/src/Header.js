import { h } from "preact";

export default async () => {
  return {
    bootstrap: async () => {},
    mount: async () => {
      const header = document.querySelector("#header");
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
        header
      );
    },
    unmount: async () => {
      // do not call
    },
  };
};
