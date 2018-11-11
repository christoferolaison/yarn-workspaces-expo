const path = require("path");
const getWorkspaces = require("get-yarn-workspaces");
const blacklist = require("metro-config/src/defaults/blacklist");
const workspaces = getWorkspaces(__dirname);

const config = {
  resolver: {
    extraNodeModules: {
      "react-native": path.resolve(__dirname, "node_modules/react-native"),
      react: path.resolve(__dirname, "node_modules/react"),
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime")
    },
    projectRoot: path.resolve(__dirname),
    watchFolders: [
      path.resolve(__dirname, "..", "..", "node_modules"),
      path.resolve(__dirname, "..", "..", "packages")
    ]
  }
};
module.exports = config;
