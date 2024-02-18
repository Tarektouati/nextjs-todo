import react from "@vitejs/plugin-react";
import {} from "vitest";
import { coverageConfigDefaults, UserConfig } from "vitest/config";

const config: UserConfig = {
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setupFiles.ts",
    include: ["**/*.test.?(c|m)[jt]s?(x)"],
    sequence: { shuffle: true },
    passWithNoTests: false,
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, ".next"],
    },
    restoreMocks: true,
  },
};

export default config;
