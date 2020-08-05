const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    path: path.join(__dirname, "public"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        header: "header@/header/remote.js",
        content: "content@/content/remote.js",
      },
      shared: {
        "simple-spa": { singleton: true },
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
