/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "<YOUR_CONNECTION_STRING>",
    interval: 0,
  },
  plugins: {
    "houdini-svelte": {},
  },
};

export default config;
