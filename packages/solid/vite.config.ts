import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solidPlugin from "vite-plugin-solid";

import pkg from "./package.json";

export default defineConfig({
  plugins: [
    solidPlugin({ ssr: true }),
    dts({
      tsconfigPath: "tsconfig.build.json",
      insertTypesEntry: true,
      bundledPackages: ["@stitches/core"],
      noEmitOnError: false,
      // skipDiagnostics: false,
      // logDiagnostics: false,

    }),
  ],
  build: {
    minify: true,
    ssr: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
