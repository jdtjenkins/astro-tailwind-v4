import packageName from "astro-tailwind-v4";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [packageName()],
});
