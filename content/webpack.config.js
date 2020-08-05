const path = require("path");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  output: {
    path: path.join(__dirname, "../shell/public/content"),
    publicPath: "/content/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "content",
      library: { type: "var", name: "content" },
      filename: "remote.js",
      exposes: {
        "./parcel": "./src/parcel",
      },
      shared: {},
      // shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
