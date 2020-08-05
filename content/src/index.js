import { h, render } from "preact";

export default async () => {
  return {
    bootstrap: async () => {},
    mount: async (props) => {
      render(h("h1", null, "hello"), props.container);
    },
    unmount: async () => {},
  };
};
