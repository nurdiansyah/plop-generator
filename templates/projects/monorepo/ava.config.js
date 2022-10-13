export default {
  extensions: {
    js: true,
    ts: "module"
  },
  nodeArguments: ["--loader=esbuild-node-loader"],
  files: ["src/**/__tests__/**/*.(test|spec).(js|ts)"]
};
