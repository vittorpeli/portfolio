import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    tailwindcss(),
    ...(process.env.VITEST ? [] : [reactRouter()]),
  ] as any,
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./test-setup.ts"],
    css: true,
    include: ["app/**/*.test.*", "test/**/*.test.*"],
    exclude: ["**/.react-router/**"],
  },
});
