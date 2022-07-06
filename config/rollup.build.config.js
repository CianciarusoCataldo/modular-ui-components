import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

import pkg from "../package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/modular-ui-components-preview/index.cjs",
        format: "cjs",
        banner: "require('./styles.css')",
        plugins: [terser()],
      },
      {
        file: "playground/src/modular-ui-components-preview/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
        banner: "require('./styles.css')",
      },
      {
        file: pkg.module,
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
    ],
    plugins: [
      del({ targets: ["dist/*", "playground/src/modular-ui-components-preview"] }),
      postcss({
        plugins: [],
        minimize: true,
        extract: "styles.css",
      }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
