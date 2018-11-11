const path = require("path");
const getWorkspaces = require("get-yarn-workspaces");
const blacklist = require("metro-config/src/defaults/blacklist");
const workspaces = getWorkspaces(__dirname);
const rootNodeModules = path.resolve(__dirname, "..", "..", "node_modules");
console.log({ workspaces, rootNodeModules });
const config = {
  resolver: {
    extraNodeModules: {
      "react-native": path.resolve(__dirname, "node_modules/react-native"),
      react: path.resolve(__dirname, "node_modules/react"),
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime")
    },
    blacklistRE: blacklist([
      `/${rootNodeModules.replace(
        /\//g,
        "[/\\\\]"
      )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
      ...workspaces.map(
        workspacePath =>
          `/${workspacePath.replace(
            /\//g,
            "[/\\\\]"
          )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`
      )
    ]),
    projectRoot: path.resolve(__dirname),
    watchFolders: [
      path.resolve(__dirname, "..", "..", "node_modules"),
      path.resolve(__dirname, "..", "..", "packages")
    ]
  }
};
console.log({ config });
module.exports = config;
