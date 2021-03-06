const path = require("path");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  output: {
    path: path.join(__dirname, "../shell/public/header"),
    publicPath: "/header/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      library: { type: "var", name: "header" },
      filename: "remote.js",
      exposes: {
        "./parcel": "./src/index",
      },
      shared: {
        "simple-spa": { singleton: true },
      },
      // shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
