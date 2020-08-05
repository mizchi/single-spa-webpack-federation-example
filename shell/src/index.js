import { registerApplication, start, navigateToUrl } from "single-spa";

registerApplication(
  "header",
  async () => {
    const mod = await import("header/parcel");
    return mod.default();
  },
  (_location) => true,
  { container: document.querySelector("#header") }
);

registerApplication(
  "content",
  async () => {
    const mod = await import("content/parcel");
    return mod.default();
  },
  (_location) => true,
  { container: document.querySelector("#app") }
);

start();
