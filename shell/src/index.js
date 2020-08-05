// import { registerApplication, start, navigateToUrl } from "single-spa";
// import { h, render, Fragment } from "preact";

// // navigateToUrl を発行するだけの x-link 要素
// customElements.define(
//   "x-link",
//   class extends HTMLElement {
//     connectedCallback() {
//       this.style.textDecoration = "underline";
//       this.style.color = "blue";
//       this.addEventListener("click", (ev) => {
//         ev.preventDefault();
//         navigateToUrl(this.getAttribute("href"));
//       });
//     }
//   }
// );

// const createHeader = async () => ({
//   bootstrap: async () => {},
//   mount: async () => {
//     const header = document.querySelector("#header");
//     render(
//       h(
//         "nav",
//         null,
//         h("x-link", { href: "/" }, "/"),
//         "|",
//         h("x-link", { href: "/xxx" }, "/xxx"),
//         "|",
//         h("x-link", { href: "/yyy" }, "/yyy")
//       ),
//       header
//     );
//   },
//   unmount: async () => {
//     // do not call
//   },
// });

// const main = document.querySelector("#app");
// const createApplication = async (name) => ({
//   bootstrap: async () => {
//     console.log(`${name}:bootstrap`);
//   },
//   mount: async () => {
//     console.log(`${name}:mount`);
//     render(h("h1", null, name), main);
//   },
//   unmount: async () => {
//     console.log(`${name}:unmount`);
//     render(h(Fragment), main);
//   },
// });

// registerApplication(
//   "header",
//   () => createHeader(),
//   (_location) => true
// );
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

// start();

const RemoteButton = import("header/Header").then((mod) => {
  console.log(mod);
});
